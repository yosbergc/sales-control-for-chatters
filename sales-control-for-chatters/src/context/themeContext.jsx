/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
const themeContext = React.createContext()

function ProvideThemeContext({children}){
    const [darkMode, setdDarkMode] = React.useState(false);
    function changeDarkMode(){
        setdDarkMode(!darkMode)
    }
    React.useEffect(() => {
        if (darkMode) {
            document.body.classList.remove('light')
            document.body.classList.add('dark');
        } else {
            document.body.classList.add('light')
            document.body.classList.remove('dark');
        }
    }, [darkMode])
    return <themeContext.Provider value={{
        darkMode,
        changeDarkMode
    }}>
        {children}
    </themeContext.Provider>
}

export { ProvideThemeContext, themeContext}