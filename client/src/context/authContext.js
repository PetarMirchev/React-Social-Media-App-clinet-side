import {createContext, useEffect, useState} from 'react';


export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    //if user is set 'darkMode' (see in 'Storage' -> 'Local Storage') load in dark mode, else load in normal mode (white)
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const login = () => { // function to login user -> null/'user'
        //TO DO -- get user from API server

        setCurrentUser({
            id: 1,
            name: "Pepi Mirchev",
            profilePic:
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
          });
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    },[currentUser]);


    return (
        <AuthContext.Provider value={{ currentUser, login }}> 
            {children}
        </AuthContext.Provider>
    );
};