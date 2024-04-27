import './App.css';
import { SaleSingle } from './components/SaleSingle/SaleSingle'
import { FilterSalesSingle } from './components/FilterSalesSingle/FilterSalesSingle';
import { ChartComponent } from './components/ChartComponent/ChartComponent';
import { OpenModal } from './components/OpenModal/OpenModal';
import { ShowInfoSection } from './components/ShowInfoSection/ShowInfoSection';
import React from 'react';
function App() {
// TODO Añadir los iconos a los titulos y mejorar el look, mejorar el boton del modal, hacerlo responsive, crear contexto con todo lo que vamos a usar, adaptar el chart.
  return (<main>
    <section className='SaleList'>
      <section className='SaleListFilters'>
        <FilterSalesSingle name={"Hoy"} isActive/>
        <FilterSalesSingle name={"Últimos 7 días"}/>
        <FilterSalesSingle name={"Últimos 15 días"}/>
        <FilterSalesSingle name={"Último mes"}/>
      </section>
        <section className='salessinglecontainer'>
          <SaleSingle />
          <SaleSingle />
          <SaleSingle />
          <SaleSingle />
          <SaleSingle />
        </section>
    </section>
    <section className='secondPart'>
      <section className='estadisticas'>
        <ChartComponent/>
      </section>
      <ShowInfoSection/>
    </section>
    <OpenModal/>
  </main>)
}

export default App;
