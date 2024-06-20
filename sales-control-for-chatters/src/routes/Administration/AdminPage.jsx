/* eslint-disable react-hooks/exhaustive-deps */
import React from "react"
import { AdminHeader } from "../../components/AdminHeader/AdminHeader"
import { useNavigate } from "react-router-dom"
import { userContext } from "../../context/userContext"
import { getUsers } from "../../services/Users"
import { getModels } from '../../services/getModels'
import { getSales } from '../../services/sales'
import { UsersContainer } from "../../components/UsersContainer/UsersContainer"
import { InfoCard } from "../../components/InfoCard/InfoCard"
import { ManyChartComponent } from "../../components/ManyChartComponent/ManyChartComponent"
import { ModelsContainer } from "../../components/ModelsContainer/ModelsContainer"
import { filterCards } from "../../utils/filterCards"
import './adminpage.css'
function AdminPage() {
  const { user, setUser } = React.useContext(userContext)
  const [models, setModels] = React.useState([])
  const [chatters, setChatters] = React.useState([])
  const [ sales, setSales ] = React.useState([])
  const { salesLastHours, salesToday, sales7Days, sales15Days, sales30Days } = filterCards(sales)
  const onlyChatters = chatters.filter(user => user.role === "chatter")
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
    (async () => {
      if (user) {
        const users = await getUsers(user.token)
        setChatters(users)
        const models = await getModels(user.token)
        setModels(models)
        const sales = await getSales(user.token)
        setSales(sales)
      }
    })()
  }, [user])
    return (
        <>
        <AdminHeader/>
        <section className="cards">
          <InfoCard title={"Ultima hora"} data={salesLastHours}/>
          <InfoCard title={"Hoy"} data={salesToday}/>
          <InfoCard title={"7 días"} data={sales7Days}/>
          <InfoCard title={"15 días"} data={sales15Days}/>
          <InfoCard title={"30 días"} data={sales30Days}/>
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