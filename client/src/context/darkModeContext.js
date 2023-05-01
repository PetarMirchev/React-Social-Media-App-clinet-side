import {createContext, useEffect, useState} from 'react';


export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({children}) => {
    //if user is set 'darkMode' (see in 'Storage' -> 'Local Storage') load in dark mode, else load in normal mode (white)
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);

    const toggle = () => { // function to toggle darkMode (change status) -> true/false
        setDarkMode(!darkMode);
    };

    useEffect( () => {
        localStorage.setItem("darkMode", darkMode);
    },[darkMode]);


    return (
        //we can send wat we want to value, but for now we need only darkMode & toggle function
        <DarkModeContext.Provider value={{ darkMode, toggle }}> 
            {children}
        </DarkModeContext.Provider>
    );
};