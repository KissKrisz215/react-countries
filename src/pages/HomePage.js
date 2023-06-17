import { CountryCard } from "../components/CountryCard";
import { Navbar } from "../components/Navbar";
import { SearchBar } from "../components/SearchBar";
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';
import { SearchContext } from "../context/search.context";

export function HomePage(){

    const {theme} = useContext(ThemeContext);
    const {data} = useContext(SearchContext);

    return(
        <>
        <Navbar />
        <div className={theme === 'light' ? "py-5" : "container-dark py-5" }>
        <SearchBar />
        <div className="container grid-container py-5 min-vh-100">
        {data.length === 0 ? <p className={theme === 'light' ? " text-center fs-3" : " text-center fs-3 text-white"}>No country was found...</p> : (
            data.map((country) => (
            <CountryCard key={country.numericCode} country={country} />
        ))
        )}
        </div>
        </div>
        </>
    );
}