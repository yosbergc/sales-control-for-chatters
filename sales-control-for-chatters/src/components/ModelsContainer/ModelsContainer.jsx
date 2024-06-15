import { Link } from "react-router-dom"
import { ModelSingle } from "../ModelSingle/ModelSingle"

function ModelsContainer({ users }) {
    return (<section className="usersContainer">
        <section className="headerusers">
            <h2>Modelos</h2>
            <Link className="button" to={'/administracion/modelos/gestionar'}>Gestionar</Link>
        </section>
        <table>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Equipo</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
        {users.map(user => {
            if (user.role === 'chatter') {
                return <ModelSingle 
                name={user.name}
                key={user.id}
            />
            }
        })}
        </tbody>
        </table>
    </section>)
}
export { ModelsContainer }