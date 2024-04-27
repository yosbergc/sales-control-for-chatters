import './App.css';
import { SaleSingle } from './components/SaleSingle/SaleSingle'
import { FilterSalesSingle } from './components/FilterSalesSingle/FilterSalesSingle';
import { ChartComponent } from './components/ChartComponent/ChartComponent';
import { OpenModal } from './components/OpenModal/OpenModal';
import { ShowInfoSection } from './components/ShowInfoSection/ShowInfoSection';
import { Modal } from './components/Modal/Modal';
import { SaleForm } from './components/SaleForm/SaleForm';
import { NoSales } from './components/NoSales/NoSales';
import React from 'react';

function App() {
  const [sales, setSales] = React.useState([])
  const [activeFilter, setActiveFilter] = React.useState(0)
  const [isModalActive, setIsModalActive] = React.useState(false)
  function handleModal() {
    setIsModalActive(!isModalActive);
  }
  return (<main>
    <section className='SaleList'>
      <section className='SaleListFilters'>
        <FilterSalesSingle name={"Hoy"} isActive/>
        <FilterSalesSingle name={"Últimos 7 días"}/>
        <FilterSalesSingle name={"Últimos 15 días"}/>
        <FilterSalesSingle name={"Último mes"}/>
      </section>
        <section className='salessinglecontainer'>
          {sales.length > 0 ? sales.map(sale => <SaleSingle/>) : <NoSales/>}
        </section>
    </section>
    <section className='secondPart'>
      <section className='estadisticas'>
        <ChartComponent/>
      </section>
      <ShowInfoSection/>
    </section>
    <OpenModal onClick={handleModal}/>
    {isModalActive && <Modal onClick={handleModal}>
        <SaleForm/>
      </Modal>}
  </main>)
}

export default App;
