import './App.css';
import { ChartComponent } from '../components/ChartComponent/ChartComponent';
import { OpenModal } from '../components/OpenModal/OpenModal';
import { ShowInfoSection } from '../components/ShowInfoSection/ShowInfoSection';
import { Modal } from '../components/Modal/Modal';
import { SaleForm } from '../components/SaleForm/SaleForm';
import { UserNewForm } from '../components/UserNewForm/UserNewForm';
import { Sales } from '../components/Sales/Sales';
import { FiltersSection } from '../components/Filters/Filters'
import { Header } from '../components/Header/Header';
import { useIntroduction } from '../hooks/useIntroduction';
import { useSales } from '../hooks/useSales';
import { useModal } from '../hooks/useModal';
import { useFilter } from '../hooks/useFilter';
import React from 'react';


function App() {
  const {isModalActive, handleModal, closeModal} = useModal()
  const [metaSemanal, setMetaSemanal] = React.useState(0)
  const {userNew, addNewUser} = useIntroduction({setMetaSemanal});
  const {sales, totalGenerado, handleDelete, handleSales} = useSales({closeModal});
  const {filters, filteredSales, setFilters} = useFilter({sales});
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
    {userNew === true && <Modal>
        <UserNewForm onSubmit={addNewUser}/>
      </Modal>}
  </main>
  </>
  )
}

export default App;
