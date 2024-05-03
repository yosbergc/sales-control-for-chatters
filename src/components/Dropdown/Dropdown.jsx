import React from "react"
import './Dropdown.css'
function Dropdown ({visible, children}) {
    const [isClicked, setIsClicked] = React.useState(false);
    const handleClick = () => {
        setIsClicked(!isClicked)
    }
    return (
        <section className="dropdown">
            <section className="visiblePart" onClick={handleClick}>
                {visible}
            </section>
            <section className="hiddenPart">
                {isClicked && <section className="dropdown-list">
                        {children}
                    </section>}
            </section>
        </section>
    )
}
export { Dropdown }