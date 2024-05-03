import { UserInfo } from '../UserInfo/UserInfo'
import { Dropdown } from '../Dropdown/Dropdown'
import { Menu } from '../Menu/Menu'
import { DropdownItem } from '../DropdownItem/DropdownItem'
import './header.css'
function Header () {
    return (
        <header>
          <Menu>
            <a href='#xs'>Panel</a>
            <a href='#xs'>Horario</a>
            <a href='#xs'>Mensajes</a>
            <a href='#xs'>Ganancias</a>
          </Menu>
          <Dropdown visible={<UserInfo/>}>
            <DropdownItem>Cuenta</DropdownItem>
            <DropdownItem>Perfil</DropdownItem>
            <DropdownItem>Cerrar sesión</DropdownItem>
          </Dropdown>
        </header>
    )
}

export { Header }