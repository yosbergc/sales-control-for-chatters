import ProfilePhoto from '../../images/profile.jpeg'
import './header.css'
function Header () {
    return (
        <header>
          <section>

          </section>
          <section className='user-header'>
            <img src={ProfilePhoto} alt='User Name'/>
            <p>Macaco</p>
          </section>
        </header>
    )
}

export { Header }