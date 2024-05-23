/* eslint-disable react-hooks/exhaustive-deps */
import './css/DashboardPage.css';
import { ChartComponent } from '../components/ChartComponent/ChartComponent';
import { OpenModal } from '../components/OpenModal/OpenModal';
import { ShowInfoSection } from '../components/ShowInfoSection/ShowInfoSection';
import { Modal } from '../components/Modal/Modal';
import { SaleForm } from '../components/SaleForm/SaleForm';
import { Sales } from '../components/Sales/Sales';
import { FiltersSection } from '../components/Filters/Filters'
import { Header } from '../components/Header/Header';
import { Loading } from '../components/Loading/Loading'
import { useSales } from '../hooks/useSales';
import { useModal } from '../hooks/useModal';
import { useFilter } from '../hooks/useFilter';
import { useNavigate } from "react-router-dom";
import { userContext } from "../context/userContext"
import { getUserInformation } from '../services/userInformation';
import React from 'react';


function App() {
  const [isLoading, setLoading] = React.useState(false)
  const {isModalActive, handleModal, closeModal} = useModal()
  const [metaSemanal, setMetaSemanal] = React.useState(null)
  const {sales, totalGenerado, handleDelete, handleSales, gotSales} = useSales({closeModal, setLoading});
  const {filters, filteredSales, setFilters} = useFilter({sales});
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
    if (!user) return
    setLoading(true)
    getUserInformation(user.token)
    .then(info => {
      setMetaSemanal(info.weeklyGoal)
      if (info.sales.length > 0) {
        gotSales(info.sales)
        setLoading(false)
      } else {
        setLoading(false)
      }
    })
    .catch(error => {
      console.log(error)
    })
  }, [user])
  return (
  <>
  <Header/>
  <main>
    <section className='SaleList'>
      <section className='SaleListFilters'>
        <FiltersSection activeFilter={filters} handleFilters={setFilters}/>
      </section>
        <section className='salessinglecontainer'>
          <Sales salesArray={filteredSales} handleDelete={handleDelete} />
        </section>
    </section>
    <section className='secondPart'>
      <section className='estadisticas'>
        <ChartComponent sales={sales} filters={filters}/>
      </section>
      <ShowInfoSection meta={metaSemanal} totalGenerado={totalGenerado}/>
    </section>
    <OpenModal onClick={handleModal}/>
    {isModalActive && <Modal onClick={handleModal}>
        <SaleForm onSubmit={handleSales}/>
      </Modal>}
  </main>
    {isLoading && <Loading />}
  </>
  )
}

export default App;
