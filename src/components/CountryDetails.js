import { Link } from "react-router-dom";
import data from '../data/data.json'
import { nanoid } from "nanoid";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export function CountryDetails({project}){
    const {flags,name, population, region, subregion, capital, topLevelDomain, currencies, languages, nativeName, borders } = project;
    const {theme} = useContext(ThemeContext);

    return(

        <div className="container py-5">
            <div className="py-4">
            <Link to="/"><button className={theme === 'light' ? "btn-back" : "btn-back-dark"}><FontAwesomeIcon icon={faArrowLeft} className='fs-5 me-1' /> Back </button></Link> 
            </div>
            <div className="d-flex flex-column flex-lg-row">
                <div className="me-5">
                    <img className="flag-image" src={flags.png}  alt={`${name} flag`} />
                </div>
                <div>
                <div className="">
                    <h1 className="fw-bold">{name}</h1>
                    </div>
                    <div className="d-flex gap-5 flex-column flex-lg-row">
                    <div className="me-5">
                    <p className="fw-bold fs-5">Native Name: <span className="fw-normal">{nativeName}</span> </p>
                    <p className="fw-bold fs-5">Population <span className="fw-normal">{population}</span> </p>
                    <p className="fw-bold fs-5">Region: <span className="fw-normal">{region}</span> </p>
                    <p className="fw-bold fs-5">Sub Region: <span className="fw-normal">{subregion}</span> </p>
                    <p className="fw-bold fs-5">Capital: <span className="fw-normal">{capital}</span> </p>
                    </div>
                    <div>
                    <p className="fw-bold fs-5">Top Level Domain: <span className="fw-normal">{topLevelDomain[0]}</span> </p>
                    <div className="fw-bold fs-5">Currencies: <span className="fw-normal">
                        {currencies.map((currency) => (
                            <p key={nanoid()}>{currency.name}</p>
                        ))}
                    </span> </div>
                    <div className="fw-bold fs-5">Languages: <span className="d-flex gap-1 fw-normal">
                    {languages.map((languages,index) => {
                        if(index === 0){
                            return <p key={nanoid()}>{languages.name}</p>
                        }else{
                            return <p key={nanoid()}>,{languages.name}</p>
                        }
                    })}
                    </span> </div>
                    </div>    
                    </div>
                    <div className=" my-5 d-flex gap-3 d-flex flex-column flex-lg-row ">
                        {borders && <p className="fw-bold fs-5">Border Countries: </p>}
                        {borders && <div className="d-flex gap-3 border-container">
                            {borders.map((border) => {
                                const {name, alpha2Code} = data.find((item) => item.alpha3Code === border)
                                return(
                                    <Link to={`/${alpha2Code}`} key={alpha2Code} className={theme === 'light' ? "border-card text-decoration-none" : "border-card-dark text-decoration-none"} key={nanoid()}>
                                    {name && <p>{name}</p>  }
                                    </Link>
                                );
                            })}
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
}