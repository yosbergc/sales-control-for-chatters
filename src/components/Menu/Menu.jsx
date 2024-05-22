import './Menu.css'
import { IoIosMenu } from "react-icons/io"
import React from 'react'
function Menu ({ children }) {
    const [isOpen, setIsOpen] = React.useState(false)
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
    <section className='menu-container'>
        <IoIosMenu size={30} color='black' className='menuIcon' onClick={handleClick}/>
        <section className={`menu ${isOpen && 'mobile-active'}`} >
            {children}
        </section>
    </section>)
}
export { Menu }
