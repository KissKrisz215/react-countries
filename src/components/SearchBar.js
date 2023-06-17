import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';
import { SearchContext } from '../context/search.context';

export function SearchBar(){

    const {theme} = useContext(ThemeContext);
    const {handleSearch,handleFilter} = useContext(SearchContext);

    return(
       <div className="container d-flex justify-content-between d-flex flex-column flex-md-row gap-4">
            <div>
                <input onChange={handleSearch} className={theme === 'light' ? "form-control search-input" :  "form-control search-input input-dark"} type="text" placeholder="Search for a country..." />
            </div>
            <div>
            <select onChange={handleFilter} className={theme === 'light' ? "form-select" : "form-select input-dark text-white"} aria-label="Default select example">
            <option selected>Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            </div>
       </div>
    );
}