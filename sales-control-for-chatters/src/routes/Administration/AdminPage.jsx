/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { AdminHeader } from "../../components/AdminHeader/AdminHeader"
import { useNavigate } from "react-router-dom"
import { userContext } from "../../context/userContext"
import { getUsers } from "../../services/getUsers"
import { UsersContainer } from "../../components/UsersContainer/UsersContainer"
function AdminPage() {
    const { user, setUser } = React.useContext(userContext)
    const [chatters, setChatters] = React.useState([])
  const navigate = useNavigate()
  
  React.useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('userLogged'));
    if (userStorage && !user) {
      setUser(userStorage)
    }
    if (!user && !userStorage) {
      navigate('/')
    }
    if (user) {
      if (user.role !== "administrador") {
        navigate('/')
      }
    }
  }, [user])
  React.useEffect(() => {
    if (user) {
      getUsers(user.token)
      .then(res => setChatters(res))
    }
    
  }, [user])
    return (
        <>
        <AdminHeader/>
        <main>
          <UsersContainer users={chatters}/>
        </main>
        </>
    )
}
export { AdminPage }