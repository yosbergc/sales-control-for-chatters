import ProfilePhoto from '../../images/miakhalifa.jpg'
import { userContext } from '../../context/userContext'
import React from 'react'
function UserInfo () {
    const { user } = React.useContext(userContext)
    return (
        <section className='user-header'>
            <img src={ProfilePhoto} alt='User Name'/>
            <p>{user?.name}</p>
        </section>
    )
}
export { UserInfo }