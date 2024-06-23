import React from "react";
import { userContext } from "../../context/userContext";
import { AdminHeader } from "../../components/AdminHeader/AdminHeader"
import { getUsers } from "../../services/Users"
function ChattersPage() {
    const { user, setUser } = React.useContext(userContext)
    const [chatters, setChatters] = React.useState([])
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
        (async () => {
          if (user) {
            const users = await getUsers(user.token)
            setChatters(users)
          }
        })()
      }, [user])
    return <>
        <AdminHeader/>
    </>
}
export { ChattersPage }