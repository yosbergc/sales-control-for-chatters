import ReactDOM from 'react-dom'
import { IoIosClose } from "react-icons/io"
function Modal ({children}) {
    return ReactDOM.createPortal(<section className='modalInner'>
            <IoIosClose color='white' size={'40px'} className='closeButton'/>
            {children}
        </section>,
        document.getElementById('modal')
    )
}
export { Modal }