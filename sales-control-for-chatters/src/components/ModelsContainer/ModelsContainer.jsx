import { Link } from "react-router-dom"
import { ModelSingle } from "../ModelSingle/ModelSingle"

function ModelsContainer({ models }) {
    return (<section className="usersContainer">
        <section className="headerusers">
            <h2>Modelos</h2>
            <Link className="button" to={'/administracion/modelos'}>Gestionar</Link>
        </section>
        <table>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Equipo</td>
                </tr>
            </thead>
            <tbody>
        {models.map(model => {
                return <ModelSingle 
                name={model.name}
                team={model.team}
                key={model._id}
            />
        })}
        </tbody>
        </table>
    </section>)
}
export { ModelsContainer }