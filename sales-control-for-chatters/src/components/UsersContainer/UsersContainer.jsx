import { UserSingle } from "../UserSingle/UserSingle"
import './userscontainer.css'
function UsersContainer({users}) {
    return (
        <section className="usersContainer">
            <h2>Ranking de usuarios</h2>
            <table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Role</td>
                        <td>Cantidad</td>
                        <td>Acciones</td>
                    </tr>
                </thead>
                <tbody>
            {users.map(user => {
                console.log(user)
                if (user.role === 'chatter') {
                    return <UserSingle 
                    id={user.id}
                    role={user.role}
                    username={user.username}
                    name={user.name}
                    total={100}
                    models={"Xxd"}
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