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
                        <label htmlFor="registerForm">Usuario</label>
                        <input type="text" id="registerForm"/>
                    </div>
                </section>
                <label htmlFor="registerForm">Contraseña</label>
                <input type="password" id="registerForm"/>
                <label htmlFor="registerForm">Meta semanal</label>
                <input type="number" id="registerForm"/>
                <button>Registrarme</button>
                <Link to="/">Ya tengo una cuenta, quiero iniciar sesión</Link>
            </form>
        </section>
    )
}
export { Register }