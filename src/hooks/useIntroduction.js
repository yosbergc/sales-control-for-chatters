import {useEffect, useState} from 'react'
function useIntroduction () {
    const DB = localStorage.getItem('userLogged')
    const [userNew, setUserNew] = useState();
    useEffect(() => {
        if (!DB) {
            setUserNew(true);
        } else {
            let userInformation = JSON.parse(localStorage.getItem('userInformation'));
            setUserNew(userInformation)
        }
    }, [])
    
    function addNewUser(nombre, genero, meta) {
        let newUser = {
            nombre,
            genero,
            meta
        }
        localStorage.setItem('userInformation', JSON.stringify(newUser))
        setUserNew(newUser)
        localStorage.setItem('userLogged', JSON.stringify(true));
    }
    return {userNew, addNewUser}
}
export { useIntroduction }