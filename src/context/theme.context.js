import React, {useState} from "react";

const ThemeContext = React.createContext();

function ThemeProviderWrapper({children}){
    const [theme, setTheme] = useState('light');
    
    const switchTheme = () => {
        if(theme === 'light'){
            setTheme('dark');
        }else if(theme === 'dark'){
            setTheme('light');
        }
    }
    return(
        <ThemeContext.Provider  value={{switchTheme,theme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export {ThemeProviderWrapper, ThemeContext};