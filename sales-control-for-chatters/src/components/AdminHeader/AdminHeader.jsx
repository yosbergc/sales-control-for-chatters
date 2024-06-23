import { Menu } from '../Menu/Menu'
import { NavLink } from 'react-router-dom'
import { UserInfo } from '../UserInfo/UserInfo'
import { Dropdown } from '../Dropdown/Dropdown'
import { DropdownItem } from '../DropdownItem/DropdownItem'
import { userContext } from '../../context/userContext'
import { useContext } from 'react'
import { themeContext } from '../../context/themeContext'
import { FaGear } from "react-icons/fa6"
import { MdOutlineAccountCircle } from "react-icons/md"
import { FaMoon } from "react-icons/fa"
import { IoIosLogOut } from "react-icons/io"
function AdminHeader() {
    const { handleLogout } = useContext(userContext)
    const { changeDarkMode } = useContext(themeContext)
    return (
        <header>
            <Menu>
                <NavLink to='/administracion' className={({isActive}) => isActive && 'active-link'}>Panel</NavLink>
                <NavLink to='/administracion/chatters' className={({isActive}) => isActive ? 'active-link' : ''}>Chatters</NavLink>
                <NavLink to='/administracion/modelos' className={({isActive}) => isActive ? 'active-link' : ''}>Modelos</NavLink>
                <NavLink to='/administracion/ranking' className={({isActive}) => isActive ? 'active-link' : ''}>Ranking</NavLink>
            </Menu>
            <Dropdown visible={<UserInfo/>}>
                <DropdownItem><FaGear size={15}/>Cuenta</DropdownItem>
                <DropdownItem><MdOutlineAccountCircle size={15}/> Perfil</DropdownItem>
                <DropdownItem onClick={changeDarkMode}><FaMoon size={15}/> Modo </DropdownItem>
                <DropdownItem onClick={handleLogout}><IoIosLogOut size={15}/> Cerrar sesión</DropdownItem>
            </Dropdown>
        </header>
    )
}
export { AdminHeader }