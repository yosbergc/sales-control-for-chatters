import './openmodal.css'
import { IoIosAddCircle } from "react-icons/io"
function OpenModal ({onClick}) {
    return (<section className="openmodal">
        <IoIosAddCircle size={"40px"} onClick={onClick}/>
    </section>)
}
export { OpenModal }