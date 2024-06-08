import Madara from '../images/madara.png'
import './css/NotFound.css'
function NotFound () {
    return (
        <section className='notfoundmain'>
            <img src={Madara} alt='Madara Uchiha'/>
            <section>
                <h2>Página no encontrada</h2>
                <p>Si sigues buscando cosas raras será día de amonestaciones...</p>
                <button>Volver a la página de inicio</button>
            </section>
        </section>
    )
}
export { NotFound }