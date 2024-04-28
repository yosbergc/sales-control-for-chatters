import './App.css';
import { SaleSingle } from './components/SaleSingle/SaleSingle'
import { FilterSalesSingle } from './components/FilterSalesSingle/FilterSalesSingle';
import { ChartComponent } from './components/ChartComponent/ChartComponent';
import { OpenModal } from './components/OpenModal/OpenModal';
import { ShowInfoSection } from './components/ShowInfoSection/ShowInfoSection';
import { Modal } from './components/Modal/Modal';
import { SaleForm } from './components/SaleForm/SaleForm';
import { NoSales } from './components/NoSales/NoSales';
import { useIntroduction } from './hooks/useIntroduction';
import { UserNewForm } from './components/UserNewForm/UserNewForm';
import moment from 'moment';
import React from 'react';


function App() {
  const [sales, setSales] = React.useState([])
  const [activeFilter, setActiveFilter] = React.useState(0)
  const [isModalActive, setIsModalActive] = React.useState(false)
  const [metaSemanal, setMetaSemanal] = React.useState(0)
  const {userNew, addNewUser} = useIntroduction();
  const totalGenerado = React.useMemo(() => {
    return sales.map(sale => Number(sale.Amount)).reduce((acum, val) => acum + val, 0).toFixed(2);
  }, [sales]);
  React.useEffect(() => {
    let stringStorage = localStorage.getItem('userInformation');
      if (!stringStorage) return
      let data = JSON.parse(stringStorage);
      setMetaSemanal(data.meta)
  }, [userNew])
  function handleModal() {
    setIsModalActive(!isModalActive);
  }
  function handleFilter(id) {
    setActiveFilter(id)
  }
  function handleDelete(id) {
    const newSales = [...sales];
    const element = newSales.findIndex(element => element.ID === id)
    newSales.splice(element, 1);
    setSales(newSales)
  }
  function handleSales({event, quantity, file}) {
    event.preventDefault()
    if (quantity === '' || !file) return
    let newSales = [...sales]
    let actualDate = moment();
    newSales.push({
      Amount: quantity,
      Date: `${actualDate.format('DD-MM-YYYY')}`,
      Hour: `${actualDate.hour()}:${actualDate.minute()}`,
      File: file,
      ID: actualDate.format('YYYYMMDDHHmm')
    });
    setSales(newSales);
    setIsModalActive(state => false)
  }
  return (<main>
    <section className='SaleList'>
      <section className='SaleListFilters'>
        <FilterSalesSingle name={"Hoy"} activeFilter={activeFilter} id={0} onClick={handleFilter}/>
        <FilterSalesSingle name={"Últimos 7 días"} activeFilter={activeFilter} id={1} onClick={handleFilter}/>
        <FilterSalesSingle name={"Últimos 15 días"} activeFilter={activeFilter} id={2} onClick={handleFilter}/>
        <FilterSalesSingle name={"Último mes"} activeFilter={activeFilter} id={3} onClick={handleFilter}/>
      </section>
        <section className='salessinglecontainer'>
          {sales.length > 0 ? 
          sales.map(sale => <SaleSingle 
          Amount={sale.Amount}
          Date={sale.Date}
          Hour={sale.Hour}
          File={sale.File}
          key={sale.ID}
          ID={sale.ID}
          onDelete={handleDelete}
          />) : <NoSales/>}
        </section>
    </section>
    <section className='secondPart'>
      <section className='estadisticas'>
        <ChartComponent/>
      </section>
      <ShowInfoSection meta={metaSemanal} totalGenerado={totalGenerado}/>
    </section>
    <OpenModal onClick={handleModal}/>
    {isModalActive && <Modal onClick={handleModal}>
        <SaleForm onSubmit={handleSales}/>
      </Modal>}
    {userNew === true && <Modal>
        <UserNewForm onSubmit={addNewUser}/>
      </Modal>}
  </main>)
}

export default App;
