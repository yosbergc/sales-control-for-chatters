import './SaleSingle.css'
import { TbMoneybag } from "react-icons/tb";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

function SaleSingle ({Amount, Date, Hour, imgsrc, ID, onDelete}) {
    const handleDelete = () => {
        onDelete(ID)
    }
    return (<section className="sale-single-container">
        <IoIosCloseCircleOutline size={'25px'} className='close' onClick={handleDelete}/>
        <img src={imgsrc} alt='Sale Single Screenshot'></img>
        <div className="sale-info">
            <div className="quantity-sell">
                <div className="left">
                    <TbMoneybag size={"20px"}/>
                    <span>Cantidad vendida</span>
                </div>
                <p className='money-gained'>{Amount}$</p>
            </div>
            <section className="separador"></section>
            <section className="date">
                <MdOutlineDateRange size={"20px"}/>
                <p>{Date} - {Hour}</p>
            </section>
        </div>
        
    </section>)
}
export { SaleSingle }