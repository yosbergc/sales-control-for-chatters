import { CiUser } from "react-icons/ci"
import { CiWarning } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci"
import { LiaUserFriendsSolid } from "react-icons/lia"
import { Tooltip } from "../../components/Tooltip/Tooltip"

function ModelSingle({ name, team}) {
    return (<tr className="usersingleInformation">
        <td>{name}</td>
        <td><p className='role'>{team}</p></td>
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
export { ModelSingle }