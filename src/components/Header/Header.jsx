import ProfilePhoto from '../../images/profile.jpeg'
import { Menu } from '../Menu/Menu'
import './header.css'
function Header () {
    return (
        <header>
          <Menu>
            <a href='#xs'>Dashboard</a>
            <a href='#xs'>Horario</a>
            <a href='#xs'>Notificaciones</a>
            <a href='#xs'>Notas</a>
          </Menu>
          <section className='user-header'>
            <img src={ProfilePhoto} alt='User Name'/>
            <p>Macaco</p>
          </section>
        </header>
    )
}

export { Header }