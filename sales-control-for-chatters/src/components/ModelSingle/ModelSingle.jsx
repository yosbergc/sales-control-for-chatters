import { Team } from "../Team/Team"
function ModelSingle({name, team, minimo}) {
    return (<tr className="usersingleInformation">
        <td>{name}</td>
        <td>{team.map(teammate => <Team nombre={teammate.name} key={teammate.name}/>)}</td>
        <td>{minimo}$</td>
    </tr>)
}
export { ModelSingle }