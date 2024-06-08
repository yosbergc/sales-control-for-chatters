import './dropdownitem.css'
function DropdownItem ({children, onClick}) {
    return (
        <section className="dropdown-item" onClick={onClick}>
            {children}
        </section>
    )
}
export { DropdownItem }