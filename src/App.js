import './App.css';
import { ChartComponent } from './components/ChartComponent/ChartComponent';
import { OpenModal } from './components/OpenModal/OpenModal';
import { ShowInfoSection } from './components/ShowInfoSection/ShowInfoSection';
import { Modal } from './components/Modal/Modal';
import { SaleForm } from './components/SaleForm/SaleForm';
<<<<<<< Updated upstream
import { UserNewForm } from './components/UserNewForm/UserNewForm';
import { Sales } from './components/Sales/Sales';
import { useIntroduction } from './hooks/useIntroduction';
import { useSales } from './hooks/useSales';
import { useModal } from './hooks/useModal';
=======
import { NoSales } from './components/NoSales/NoSales';
import { UserNewForm } from './components/UserNewForm/UserNewForm';
import { useIntroduction } from './hooks/useIntroduction';

import moment from 'moment';
>>>>>>> Stashed changes
import React from 'react';


function App() {
<<<<<<< Updated upstream
  const {isModalActive, handleModal, closeModal} = useModal()
  const [metaSemanal, setMetaSemanal] = React.useState(0)
  const {userNew, addNewUser} = useIntroduction({setMetaSemanal});
  const {sales, totalGenerado, handleDelete, handleSales} = useSales({closeModal});
  
=======
  const [sales, setSales] = React.useState([])
  const [activeFilter, setActiveFilter] = React.useState(0)
  const [isModalActive, setIsModalActive] = React.useState(false)
  const {userNew, addNewUser} = useIntroduction()

  function handleModal() {
    setIsModalActive(!isModalActive);
  }
  function handleFilter(id) {
    setActiveFilter(id)
  }
  function deleteSale(id) {
    const newSale = [...sales]
    const elementToDelete = newSale.findIndex(element => element.ID === id);
    newSale.splice(elementToDelete, 1);
    setSales(newSale)
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    {userNew === true && <Modal>
=======
    {userNew === true && <Modal >
>>>>>>> Stashed changes
        <UserNewForm onSubmit={addNewUser}/>
      </Modal>}
  </main>)
}

export default App;
