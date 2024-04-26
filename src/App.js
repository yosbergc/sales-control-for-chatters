import './App.css';
import { SaleSingle } from './components/SaleSingle/SaleSingle'
import { FilterSalesSingle } from './components/FilterSalesSingle/FilterSalesSingle';
import { ChartComponent } from './components/ChartComponent/ChartComponent';
import { OpenModal } from './components/OpenModal/OpenModal';
import { ShowInfoSection } from './components/ShowInfoSection/ShowInfoSection';
import React from 'react';
function App() {

  return (<main>
    <section className='SaleList'>
      <section className='SaleListFilters'>
        <FilterSalesSingle name={"Hoy"} isActive/>
        <FilterSalesSingle name={"Últimos 7 días"}/>
        <FilterSalesSingle name={"Últimos 15 días"}/>
        <FilterSalesSingle name={"Último mes"}/>
      </section>
      <SaleSingle />
      <SaleSingle />
      <SaleSingle />
      <SaleSingle />
      <SaleSingle />
    </section>
    <section>
      <section className='estadisticas'>
        <ChartComponent/>
      </section>
      <ShowInfoSection/>
    </section>
    <OpenModal/>
  </main>)
}

export default App;
