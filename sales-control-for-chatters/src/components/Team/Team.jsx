import { Tooltip } from "../Tooltip/Tooltip"
function Team({nombre}) {
    return <section>
        <Tooltip text={"Nombre"}>
            {nombre[0].toUpperCase()}
        </Tooltip>
    </section>
}