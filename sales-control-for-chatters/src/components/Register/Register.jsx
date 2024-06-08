import './Register.css'
import { Link } from 'react-router-dom'
function Register() {
    return (
        <section className="registerForm">
            <form>
                <h2>Registro</h2>
                <section className='top'>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre"/>
                    </div>
                    <div>
                        <label htmlFor="username">Usuario</label>
                        <input type="text" id="username"/>
                    </div>
                </section>
                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password"/>
                <label htmlFor="paymentEmail">Email de pagos en Binance</label>
                <input type="email" id="paymentEmail"/>
                <button>Registrarme</button>
                <Link to="/">Ya tengo una cuenta, quiero iniciar sesión</Link>
            </form>
        </section>
    )
}
export { Register }