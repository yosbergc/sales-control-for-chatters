import './loginpage.css'
import { userLogin } from '../../services/userLogin'
import React from 'react'
import { userContext } from '../../context/userContext'
import { useNavigate, Link } from 'react-router-dom'
import { Loading } from '../Loading/Loading'
function LoginForm () {
    const [isLoading, setIsloading] = React.useState(false)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsloading(true)
        userLogin(email, password)
        .then(res => {
            res.json().then(response => {
                setIsloading(false)
                if (response.error) {
                    setError(response.error)
                    setTimeout(() => {
                        setError(false)
                    }, 5000)
                } else {
                    setUser(response)
                    window.localStorage.setItem('userLogged', JSON.stringify(response))
                    if (response.role === 'administrador'){
                        navigate('/administracion')
                    } else if (response.role === 'chatter') {
                        navigate('/panel')
                    }
                    
                    
                }
            })
        })
    }
    const { setUser } = React.useContext(userContext)
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(false)
    return (
    <section className="loginPage">
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <label htmlFor="loginFormEmail">Usuario</label>
            <input type="text" id="loginFormEmail" value={email} onChange={(e) => {
                setEmail(e.target.value)
            }}/>
            <label htmlFor="loginFormPassword">Contraseña</label>
            <input type="password" id="loginFormPassword" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <button>Iniciar sesión</button>
            <Link to="/registro">Registrarme</Link>
            {error && <p className='errorName'>{error}</p>}
        </form>
        {isLoading && <Loading />}

    </section>
    )
}
export { LoginForm }