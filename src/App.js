import './App.css';
import { SaleSingle } from './components/SaleSingle/SaleSingle'
import { FilterSalesSingle } from './components/FilterSalesSingle/FilterSalesSingle';
import { ChartComponent } from './components/ChartComponent/ChartComponent';
import { OpenModal } from './components/OpenModal/OpenModal';
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
    <section className='estadisticas'>
      <ChartComponent/>
    </section>
    <OpenModal/>
  </main>)
}

export default App;
