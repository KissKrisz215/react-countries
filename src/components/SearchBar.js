import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

export function SearchBar(){

    const {theme} = useContext(ThemeContext);

    return(
       <div className="container d-flex justify-content-between">
            <div>
                <input className={theme === 'light' ? "form-control search-input" :  "form-control search-input input-dark"} type="text" placeholder="Search for a country..." />
            </div>
            <div>
            <select className={theme === 'light' ? "form-select" : "form-select input-dark text-white"} aria-label="Default select example">
            <option selected>Filter by Region</option>
                <option value="">Africa</option>
                <option value="">America</option>
                <option value="">Asia</option>
                <option value="">Europe</option>
                <option value="">Oceania</option>
            </select>
            </div>
       </div>
    );
}