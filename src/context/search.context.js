// import React, {useState} from "react";
// import data from '../data/data.json';

// const SearchContext = React.createContext();

// function SearchProviderWrapper({children}){
//     const [search, setSearch] = useState(null);
//     const [select, setSelect] = useState(null);
//     const [data, setData] = useState(data);

//     const setFilter = (e) => {
//         const {value} = e.target;
//         if(value === ""){
//             setSearch(data);
//         }else{
//             const filteredItems = data.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
//             setData(filteredItems);
//         }
//     }

//     // const setSearch = (e) => {

//     // }

//     return(
//         <>
//             <SearchContext.Provider value={{setFilter}}>
//                 {children}
//             </SearchContext.Provider>
//         </>
//     );
// }

// export {SearchProviderWrapper, SearchContext};