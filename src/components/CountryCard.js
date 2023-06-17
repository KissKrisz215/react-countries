import { Link } from "react-router-dom";
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

export function CountryCard({country}){

    const {theme} = useContext(ThemeContext);

    return(
        <Link to={`/${country.alpha2Code}`} className="text-decoration-none card-wrapper">
        <div className={theme === 'light' ? "card mb-5" : "card mb-5 border-0"  }>
        <img className="card-image" src={country.flags.png} />
        <div className={theme === 'light' ? "card-body py-4 pb-5" : " card-body py-4 pb-5 bg-lightdark text-white"}>
            <h5 className="card-title fw-bold">{country.name}</h5>
            <p className="card-text fw-bold">Population: <span className="fw-normal">{country.population}</span> </p>
            <p className="card-text fw-bold">Region: <span className="fw-normal">{country.region}</span> </p>
            <p className="card-text fw-bold">Capital: <span className="fw-normal">{country.capital}</span> </p>
        </div>
        </div>
        </Link>
    );
}