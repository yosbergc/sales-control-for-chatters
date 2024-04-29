import './App.css';
import { ChartComponent } from './components/ChartComponent/ChartComponent';
import { OpenModal } from './components/OpenModal/OpenModal';
import { ShowInfoSection } from './components/ShowInfoSection/ShowInfoSection';
import { Modal } from './components/Modal/Modal';
import { SaleForm } from './components/SaleForm/SaleForm';
import { UserNewForm } from './components/UserNewForm/UserNewForm';
import { Sales } from './components/Sales/Sales';
import { useIntroduction } from './hooks/useIntroduction';
import { useSales } from './hooks/useSales';
import { useModal } from './hooks/useModal';
import React from 'react';


function App() {
  const {isModalActive, handleModal, closeModal} = useModal()
  const [metaSemanal, setMetaSemanal] = React.useState(0)
  const {userNew, addNewUser} = useIntroduction({setMetaSemanal});
  const {sales, totalGenerado, handleDelete, handleSales} = useSales({closeModal});
  
  return (<main>
    <section className='SaleList'>
      <section className='SaleListFilters'>
        <Sales salesArray={sales} handleDelete={handleDelete} />
      </section>
        <section className='salessinglecontainer'>
          
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
