import ProfilePhoto from '../../images/profile.jpeg'
function UserInfo () {
    return (
        <section className='user-header'>
            <img src={ProfilePhoto} alt='User Name'/>
            <p>Macaco</p>
        </section>
    )
}
export { UserInfo }