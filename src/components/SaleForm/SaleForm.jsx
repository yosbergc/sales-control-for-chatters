import './SaleForm.css'
import { MdOutlineUploadFile } from "react-icons/md"
function SaleForm () {
    function handleSubmit(event) {
        event.preventDefault()
    }
    return (<form onSubmit={handleSubmit}>
        <label htmlFor="quantity">Cantidad vendida</label>
        <input type="number" name="quantity" placeholder="100.54" id="quantity"/>
        <label htmlFor="screenshot" className='uploadFile'>
            <span><MdOutlineUploadFile color='white' size={40} className='icon'/> Archivo a subir</span>
        </label>
        <input type="file" name="screenshot" id="screenshot"/>
        <button>Agregar venta</button>
    </form>)
}
export { SaleForm }