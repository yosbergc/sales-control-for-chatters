import './loginpage.css'
function LoginForm () {
    return (
    <section className="loginPage">
        <form>
            <h2>Chatter Login</h2>
            <label htmlFor="loginFormEmail">Email</label>
            <input type="text" id="loginFormEmail"/>
            <label htmlFor="loginFormPassword">Password</label>
            <input type="password" id="loginFormPassword"/>
            <button>Iniciar sesión</button>
        </form>
    </section>
    )
}
export { LoginForm }