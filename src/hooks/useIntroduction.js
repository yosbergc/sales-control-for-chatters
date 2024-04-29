<<<<<<< Updated upstream
/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'
import { useLocalStorage } from './useLocalStorage';
function useIntroduction ({setMetaSemanal}) {
    const {get, parse, set} = useLocalStorage();
    const [userNew, setUserNew] = useState();
    const DB = get('userLogged')
=======
import {useEffect, useState} from 'react'
function useIntroduction () {
    const DB = localStorage.getItem('userLogged')
    const [userNew, setUserNew] = useState();
>>>>>>> Stashed changes
    useEffect(() => {
        if (!DB) {
            setUserNew(true);
        } else {
<<<<<<< Updated upstream
            const userInformation = parse('userInformation');
=======
            let userInformation = JSON.parse(localStorage.getItem('userInformation'));
>>>>>>> Stashed changes
            setUserNew(userInformation)
        }
    }, [])
    
    function addNewUser(nombre, genero, meta) {
<<<<<<< Updated upstream
        console.log(nombre, genero, meta)
=======
>>>>>>> Stashed changes
        let newUser = {
            nombre,
            genero,
            meta
        }
<<<<<<< Updated upstream
        set('userInformation', newUser)
        setUserNew(newUser)
        set('userLogged', true)
    }
    useEffect(() => {
        let stringStorage = get('userInformation');
          if (!stringStorage) return
          let data = parse('userInformation');
          setMetaSemanal(data.meta)
      }, [userNew])
    
=======
        localStorage.setItem('userInformation', JSON.stringify(newUser))
        setUserNew(newUser)
        localStorage.setItem('userLogged', JSON.stringify(true));
    }
>>>>>>> Stashed changes
    return {userNew, addNewUser}
}
export { useIntroduction }