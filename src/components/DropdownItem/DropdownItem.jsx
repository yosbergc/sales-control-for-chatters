import './dropdownitem.css'
function DropdownItem ({children}) {
    return (
        <section className="dropdown-item">
            {children}
        </section>
    )
}
export { DropdownItem }