import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useState, useEffect, useContext } from "react";
import data from '../data/data.json'
import { CountryDetails } from "../components/CountryDetails";
import { ThemeContext } from "../context/theme.context";

export function ProjectDetailPage(){

    const {id} = useParams();
    const [project, setProject] = useState(null);
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        const foundCountry = data.filter((country) => country.alpha2Code === id);
        setProject(foundCountry[0]);
    }, [id]);

    return(
        <div className={theme === 'light' ? "min-vh-100" : "container-dark min-vh-100 text-white" }>
        <Navbar />
        {project && <CountryDetails project={project} />}
        </div>
    );
}