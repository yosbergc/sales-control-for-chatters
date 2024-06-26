import { Link } from "react-router-dom"
import { UserSingle } from "../UserSingle/UserSingle"
import './userscontainer.css'

function UsersContainer({users}) {
    return (
        <section className="usersContainer">
            <section className="headerusers">
                <h2>Chatters</h2>
                <Link className="button" to={'/administracion/chatters'}>Gestionar</Link>
            </section>
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Role</td>
                        <td>Estado</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
            {users.map(user => {
                if (user.role === 'chatter') {
                    return <UserSingle 
                    id={user.id}
                    role={user.role}
                    username={user.username}
                    name={user.name}
                    estado={user.active}
                    sales={user.sales}
                    key={user.id}
                />
                }
            })}
            </tbody>
            </table>
        </section>
    )
}
export { UsersContainer }