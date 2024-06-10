import './UserSingle.css'
import { CiUser } from "react-icons/ci"
import { CiWarning } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci"
import { LiaUserFriendsSolid } from "react-icons/lia"
function UserSingle({name, total, role}) {
    return (<tr className="usersingleInformation">
        <td>{name}</td>
        <td><p className='role'>{role}</p></td>
        <td>{total}.00$</td>
        <td className='actions'>
            <CiUser size={20}/>
            <CiWarning  size={20}/>
            <CiMoneyBill size={20}/>
            <LiaUserFriendsSolid size={20}/>
        </td>
    </tr>)
}
export { UserSingle }