import { UserSingle } from "../UserSingle/UserSingle"
function UsersContainer({users}) {
    return (
        <section>
            {users.map(user => {
                return <UserSingle 
                    key={user.id}
                />
            })}
        </section>
    )
}
export { UsersContainer }