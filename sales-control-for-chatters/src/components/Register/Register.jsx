import './Register.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { registerUser } from '../../services/registerUser'
import { validateEmail } from '../../utils/regexEmail'
function Register() {
    const [error, setError] = React.useState(false)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = new FormData(event.target)
        const nombre = form.get('nombre');
        const username = form.get('username');
        const password = form.get('password');
        const paymentEmail = form.get('paymentEmail');
        const isEmailValid = validateEmail.test(paymentEmail)
        if (nombre.length === 0 || username.length === 0 || password.length === 0 || paymentEmail === 0) {
            setError('Hacen falta algunos datos') 
            return setTimeout(() => {
                setError(false)
            }, 5000)
        }
        if (password.length < 8) {
            setError('La contraseña debe tener al menos 8 caracteres') 
            return setTimeout(() => {
                setError(false)
            }, 5000)
        }
        if (!isEmailValid) {
            setError('Eso no es un correo electrónico valido')
            return setTimeout(() => {
                setError(false)
            }, 5000)
        }
        registerUser(username, password, nombre, paymentEmail)
        .then(res => {
            console.log(res)
            console.log("Positiva")
        })
        .catch(error => {
            setError(error.response.data.error)
            return setTimeout(() => {
                setError(false)
            }, 5000)
        })
    }
    return (
        <section className="registerForm" onSubmit={handleSubmit}>
            <form>
                <h2>Registro</h2>
                <section className='top'>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name='nombre'/>
                    </div>
                    <div>
                        <label htmlFor="username">Usuario</label>
                        <input type="text" id="username" name='username'/>
                    </div>
                </section>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" name='password'/>
                <label htmlFor="paymentEmail">Email de pagos en Binance</label>
                <input type="email" id="paymentEmail" name='paymentEmail'/>
                <button>Registrarme</button>
                <Link to="/">Ya tengo una cuenta, quiero iniciar sesión</Link>
            </form>
            {error && <p className='errorName'>{error}</p>}
        </section>
        
    )
}
export { Register }