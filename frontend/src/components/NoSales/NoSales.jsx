import { FaRegSadCry } from "react-icons/fa"
import './NoSales.css'
function NoSales () {
    return <section className="NoSales">
        <FaRegSadCry size={50}/>
        <p>No hay ventas registradas.</p>
    </section>
}
export { NoSales }