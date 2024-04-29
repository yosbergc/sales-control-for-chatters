/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from 'react'
import { useLocalStorage } from './useLocalStorage';
function useIntroduction ({setMetaSemanal}) {
    const {get, parse, set} = useLocalStorage();
    const [userNew, setUserNew] = useState();
    const DB = get('userLogged')
    useEffect(() => {
        if (!DB) {
            setUserNew(true);
        } else {
            const userInformation = parse('userInformation');
            setUserNew(userInformation)
        }
    }, [])
    
    function addNewUser(nombre, genero, meta) {
        console.log(nombre, genero, meta)
        let newUser = {
            nombre,
            genero,
            meta
        }
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
    
    return {userNew, addNewUser}
}
export { useIntroduction }