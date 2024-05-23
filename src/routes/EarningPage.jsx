/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Header } from "../components/Header/Header"
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext"
function EarningPage() {
    const { user, setUser } = React.useContext(userContext)
    const navigate = useNavigate()
    React.useEffect(() => {
        const userStorage = JSON.parse(localStorage.getItem('userLogged'));
        if (userStorage && !user) {
        setUser(userStorage)
        }
        if (!user && !userStorage) {
        navigate('/')
        }
    }, [user])
    return (
    <>
        <Header />
    </>)
}
export { EarningPage }