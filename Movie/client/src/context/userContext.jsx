import { createContext, useState } from "react";

export const userContext = createContext();

export const UserProvider = ({children}) => {

    const [loggedInUser, setLoggedInUser] = useState(null);

    return (
        <userContext.Provider value={{ loggedInUser, setLoggedInUser}}>
            {children}
        </userContext.Provider>
    )
}