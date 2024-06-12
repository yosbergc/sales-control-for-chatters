import React from "react";
import './tooltip.css'
function Tooltip({children, text}) {
    const [show, setShow] = React.useState(false)

    return <section className="tooltipContainer" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        {children}
        {show && <p className="tooltipModal">{text}</p>}
    </section>
}
export { Tooltip }