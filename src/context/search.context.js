import React, {useEffect, useState} from "react";
import countriesData from '../data/data.json'

const SearchContext = React.createContext();

function SearchProviderWrapper({children}){
    const [search, setSearch] = useState(null);
    const [select, setSelect] = useState(null);
    const [data, setData] = useState(countriesData);

    useEffect(() => {
        handleAllSearch();
    }, [search,select]);

    const handleSearch = (e) => {
        const {value} = e.target;
        if(value === ""){
            setSearch(null);
        }else{
            setSearch(value);
        }
    }

    const handleFilter = (e) => {
        const {value} = e.target;
        value === 'none' ? setSelect(null) : setSelect(value);
    }

    const handleAllSearch = () => {
        if(!search && !select){
            setData(countriesData);
        }else if(search === null && select !== null){
             const filteredItems = countriesData.filter((item) => item.region.toLowerCase().includes(select.toLowerCase()));
            setData(filteredItems);
        }else if(search !== null && select === null){
            const filteredItems = countriesData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
            setData(filteredItems);
        }else if(search !== null && select !== null){
            const filteredItems = countriesData.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) && item.region.toLowerCase().includes(select.toLowerCase()));
            setData(filteredItems);
        }
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