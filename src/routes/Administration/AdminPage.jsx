/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { AdminHeader } from "../../components/AdminHeader/AdminHeader"
import { useNavigate } from "react-router-dom"
import { userContext } from "../../context/userContext"
function AdminPage() {
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
    if (user.role !== "administrador") {
      navigate('/')
    }
  }, [user])
    return (
        <>
        <AdminHeader/>
        </>
    )
}
export { AdminPage }