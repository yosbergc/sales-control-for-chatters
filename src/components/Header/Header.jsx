import { UserInfo } from '../UserInfo/UserInfo'
import { Dropdown } from '../Dropdown/Dropdown'
import { Menu } from '../Menu/Menu'
import { DropdownItem } from '../DropdownItem/DropdownItem'
import { MdOutlineAccountCircle } from "react-icons/md"
import { FaGear } from "react-icons/fa6"
import { IoIosLogOut } from "react-icons/io"
import './header.css'
function Header () {
    return (
        <header>
          <Menu>
            <a href='#xs'>Panel</a>
            <a href='#xs'>Horario</a>
            <a href='#xs'>Mensajes</a>
            <a href='#xs'>Ganancias</a>
            <a href='#xs'>Amonestación</a>
          </Menu>
          <Dropdown visible={<UserInfo/>}>
            <DropdownItem><FaGear size={20}/>Cuenta</DropdownItem>
            <DropdownItem><MdOutlineAccountCircle size={20}/> Perfil</DropdownItem>
            <DropdownItem><IoIosLogOut size={20}/> Cerrar sesión</DropdownItem>
          </Dropdown>
        </header>
    )
}

export { Header }