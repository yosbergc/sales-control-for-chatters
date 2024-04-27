import ReactDOM from 'react-dom'
import { IoIosClose } from "react-icons/io"
function Modal ({children}) {
    return ReactDOM.createPortal(<>
            <IoIosClose />
        </>,
        document.getElementById('modal')
    )
}
export { Modal }