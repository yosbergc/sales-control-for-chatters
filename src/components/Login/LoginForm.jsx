import './loginpage.css'
import { userLogin } from '../../services/userLogin'
import React from 'react'
import { userContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom'
function LoginForm () {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        userLogin(email, password)
        .then(res => {
            res.json().then(response => {
                if (response.error) {
                    setError(response.error)
                    setTimeout(() => {
                        setError(false)
                    }, 5000)
                } else {
                    setUser(response)
                    window.localStorage.setItem('userLogged', JSON.stringify(response))
                    navigate('/panel')
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
            
            {error && <p className='errorName'>{error}</p>}
        </form>
    </section>
    )
}
export { LoginForm }