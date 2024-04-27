import './SaleForm.css'
import { MdOutlineUploadFile } from "react-icons/md"
import React from 'react'
function SaleForm ({onSubmit}) {
    const quantityRef = React.useRef()
    const [file, setFile] = React.useState(false)
    const handleFile = (event) => {
        if (event.target?.files[0]){
            setFile(event.target.files[0]);
        }
    }
    return (<form onSubmit={(event) => {
        const quantity = quantityRef.current.value;
        onSubmit({event, quantity, file})
    }}>
        <label htmlFor="quantity">Cantidad vendida</label>
        <input type="number" name="quantity" placeholder="Monto vendido" id="quantity" ref={quantityRef} step={0.01}/>
        <label htmlFor="screenshot" className={`uploadFile ${file && "fileadded"}`}>
            <span>
                <MdOutlineUploadFile color='white' size={30} className='icon'/> {file ? "Archivo agregado" : "Archivo a subir"}
            </span>
        </label>
        <input type="file" name="screenshot" id="screenshot" onChange={handleFile}/>
        {file && <img src={window.URL.createObjectURL(file)} alt='Captura de pantalla' className='imageAdded'></img>}
        <button>Agregar venta</button>
    </form>)
}
export { SaleForm }