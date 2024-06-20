/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { AdminHeader } from "../../components/AdminHeader/AdminHeader"
import { useNavigate } from "react-router-dom"
import { userContext } from "../../context/userContext"
import { getUsers } from "../../services/Users"
import { UsersContainer } from "../../components/UsersContainer/UsersContainer"
import { InfoCard } from "../../components/InfoCard/InfoCard"
import { ManyChartComponent } from "../../components/ManyChartComponent/ManyChartComponent"
import { ModelsContainer } from "../../components/ModelsContainer/ModelsContainer"
import { getModels } from '../../services/getModels'
import './adminpage.css'
function AdminPage() {
  const { user, setUser } = React.useContext(userContext)
  const [models, setModels] = React.useState([])
  const [chatters, setChatters] = React.useState([])
  const navigate = useNavigate()
  const onlyChatters = chatters.filter(user => user.role === "chatter")
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
      .finally(() => {
        getModels(user.token)
        .then(data => {
          setModels(data)
          console.log(data)
        })
        .catch(error => console.log(error))
      })
      .catch(error => console.log(error))
      .catch(error => console.log(error))
    }
    
  }, [user])
    return (
        <>
        <AdminHeader/>
        <section className="cards">
          <InfoCard title={"Ultima hora"} data={"200.00$"}/>
          <InfoCard title={"Hoy"} data={"4875.13$"}/>
          <InfoCard title={"7 días"} data={"32158.99$"}/>
          <InfoCard title={"15 días"} data={"64859.11$"}/>
          <InfoCard title={"30 días"} data={"150857.11$"}/>
        </section>
        <main>
          <UsersContainer users={chatters}/>
          <ManyChartComponent users={onlyChatters} title={"chatters"}/>
          <ManyChartComponent users={models} title={"modelos"}/>
          <ModelsContainer models={models}/>
        </main>
        </>
    )
}
export { AdminPage }