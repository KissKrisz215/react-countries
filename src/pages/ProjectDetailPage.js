import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { useState, useEffect } from "react";
import data from '../data/data.json'
import { CountryDetails } from "../components/CountryDetails";

export function ProjectDetailPage(){

    const {id} = useParams();
    const [project, setProject] = useState(null);
    console.log(project)

    useEffect(() => {
        const foundCountry = data.filter((country) => country.alpha2Code === id);
        setProject(foundCountry[0]);
    }, []);

    return(
        <div>
        <Navbar />
        {project && <CountryDetails project={project} />}
        </div>
    );
}