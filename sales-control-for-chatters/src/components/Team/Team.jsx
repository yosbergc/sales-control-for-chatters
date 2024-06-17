import { Tooltip } from "../Tooltip/Tooltip"
import './team.css'
function Team({nombre}) {
    return <section className="teamMate">
        <Tooltip text={nombre}>
            {nombre[0].toUpperCase()}
        </Tooltip>
    </section>
}
export { Team }