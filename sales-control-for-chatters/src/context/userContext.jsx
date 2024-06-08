/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
const userContext = React.createContext()

function ProvideUserContext({children}) {
    const [user, setUser] = React.useState();
    function handleLogout() {
        localStorage.clear()
        setUser(null)
    }

    return <userContext.Provider value={{
        user,
        setUser,
        handleLogout
    }}>
        {children}
    </userContext.Provider>
}
export {userContext, ProvideUserContext}