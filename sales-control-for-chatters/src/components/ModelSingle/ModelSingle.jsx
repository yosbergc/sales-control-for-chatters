import { CiUser } from "react-icons/ci"
import { LiaUserFriendsSolid } from "react-icons/lia"
import { Tooltip } from "../../components/Tooltip/Tooltip"

function ModelSingle({ name, team}) {
    return (<tr className="usersingleInformation">
        <td>{name}</td>
        <td>{team}</td>
        <td className='actions'>
            <Tooltip text={"Perfil"}>
                <CiUser size={20}/>
            </Tooltip>
            <Tooltip text={"Gestionar equipo"}>
                <LiaUserFriendsSolid size={20}/>
            </Tooltip>
            
        </td>
    </tr>)
}
export { ModelSingle }