import './ShowInfoSection.css'
import { FaImages } from "react-icons/fa"
import { BiSolidDollarCircle } from "react-icons/bi"
function ShowInfoSection ({meta, totalGenerado}) {
    const totalRestante = (meta - totalGenerado).toFixed(2)
    return (<section className='showInfoSection'>
        <section className="upper">
            <section className='totalGenerated'>
                <h3>Total generado hoy</h3>
                <h5>{totalGenerado}$</h5>
            </section>
            <section className='restanteMeta'>
                <h3>Restante para la meta semanal</h3>
                <h5>{totalRestante > 0 ? totalRestante+"$" : "Meta alcanzada"}</h5>
            </section>
        </section>
        <section className="down">
            <button><FaImages size={25}/> Obtener capturas</button>
            <button><BiSolidDollarCircle size={25}/>Obtener total</button>
        </section>
    </section>)
}
export { ShowInfoSection }