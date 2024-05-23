import { UserInfo } from '../UserInfo/UserInfo'
import { Dropdown } from '../Dropdown/Dropdown'
import { Menu } from '../Menu/Menu'
import { DropdownItem } from '../DropdownItem/DropdownItem'
import { MdOutlineAccountCircle } from "react-icons/md"
import { FaGear } from "react-icons/fa6"
import { IoIosLogOut } from "react-icons/io"
import { userContext } from '../../context/userContext'
import { useContext } from 'react'
import { FaMoon } from "react-icons/fa"
import { themeContext } from '../../context/themeContext'
import { NavLink } from 'react-router-dom'
import './header.css'
function Header () {
    const { handleLogout } = useContext(userContext)
    const { changeDarkMode } = useContext(themeContext)
    return (
        <header>
          <Menu>
            <NavLink to='/panel' className={({isActive}) => isActive && 'active-link'}>Panel</NavLink>
            <NavLink to='/panel/horario' className={({isActive}) => isActive && 'active-link'}>Horario</NavLink>
            <NavLink to='/panel/mensajes' className={({isActive}) => isActive && 'active-link'}>Mensajes</NavLink>
            <NavLink to='/panel/ganancias' className={({isActive}) => isActive && 'active-link'}>Ganancias</NavLink>
            <NavLink to='/panel/advertencias' className={({isActive}) => isActive && 'active-link'}>Amonestaciones</NavLink>
            <NavLink to='/panel/ranking' className={({isActive}) => isActive && 'active-link'}>Ranking</NavLink>
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

export { Header }