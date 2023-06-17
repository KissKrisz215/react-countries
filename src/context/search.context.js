import React, {useState} from "react";
import countriesData from '../data/data.json'

const SearchContext = React.createContext();

function SearchProviderWrapper({children}){
    const [search, setSearch] = useState(null);
    const [select, setSelect] = useState(null);
    const [data, setData] = useState(countriesData);
    console.log(select);


    const handleSearch = (e) => {
        const {value} = e.target;
        if(value === "" && select === null){
            setData(countriesData);
        }else{
            const filteredItems = countriesData.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
            console.log(filteredItems);
            setData(filteredItems);
            console.log(select);
        }
    }

    const handleFilter = (e) => {
        const {value} = e.target;
        setSelect(value);
    }

    return(
        <>
            <SearchContext.Provider value={{handleSearch,handleFilter,data}}>
                {children}
            </SearchContext.Provider>
        </>
    );
}

export {SearchProviderWrapper, SearchContext};