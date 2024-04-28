import { IoIosClose } from "react-icons/io"
import './Modal.css'
function Modal ({children, onClick}) {
    return (<div id="modal">
    <section className='modalInner'>
        <IoIosClose color='white' size={'40px'} className='closeButton' onClick={onClick}/>
        {children}
    </section>
</div>)
}
export { Modal }