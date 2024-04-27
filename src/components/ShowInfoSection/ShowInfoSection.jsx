import './ShowInfoSection.css'
import { FaImages } from "react-icons/fa"
import { BiSolidDollarCircle } from "react-icons/bi"
function ShowInfoSection () {
    return (<section className='showInfoSection'>
        <section className="upper">
            <section className='totalGenerated'>
                <h3>Total generado hoy</h3>
                <h5>317.82$</h5>
            </section>
            <section className='restanteMeta'>
                <h3>Restante para la meta semanal</h3>
                <h5>5783.18$</h5>

            </section>
            <section className='gananciaEstimada'>
                <h3>Ganancias estimadas</h3>
                <h5>25.42$</h5>
            </section>
        </section>
        <section className="down">
            <button><FaImages size={25}/> Obtener capturas</button>
            <button><BiSolidDollarCircle size={25}/>Obtener total</button>
        </section>
    </section>)
}
export { ShowInfoSection }