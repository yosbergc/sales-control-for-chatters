import './UserSingle.css'
import { CiUser } from "react-icons/ci"
import { CiWarning } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci"
import { LiaUserFriendsSolid } from "react-icons/lia"
import { Tooltip } from "../../components/Tooltip/Tooltip"
function UserSingle({name, estado, role}) {
    return (<tr className="usersingleInformation">
        <td>{name}</td>
        <td><p className='role'>{role}</p></td>
        <td>{estado ? <p className='activo'>Activo</p> : <p className='inactivo'>Inactivo</p>}</td>
        <td className='actions'>
            <Tooltip text={"Perfil"}>
                <CiUser size={20}/>
            </Tooltip>
            <Tooltip text={"Amonestar"}>
                <CiWarning  size={20}/>
            </Tooltip>
            <Tooltip text={"Pagar"}>
                <CiMoneyBill size={20}/>
            </Tooltip>
            <Tooltip text={"Modelos asignadas"}>
                <LiaUserFriendsSolid size={20}/>
            </Tooltip>
            
        </td>
    </tr>)
}
export { UserSingle }