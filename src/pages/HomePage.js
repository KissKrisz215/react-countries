import { CountryCard } from "../components/CountryCard";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';
import data from '../data/data.json';

export function HomePage(){

    const {theme} = useContext(ThemeContext);

    return(
        <>
        <Navbar />
        <div className={theme === 'light' ? "py-5" : "container-dark py-5" }>
        <SearchBar />
        <div className="container grid-container py-5">
        {data.map((country) => (
            <CountryCard key={country.numericCode} country={country} />
        ))}
        </div>
        </div>
        </>
    );
}