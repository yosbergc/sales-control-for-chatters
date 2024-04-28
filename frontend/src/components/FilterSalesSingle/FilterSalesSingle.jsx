import './FilterSalesSingle.css'
function FilterSalesSingle ({name, id, activeFilter, onClick}) {
    const handleClick = () => {
        onClick(id)
    }
    return (<section className={`filter-single ${activeFilter === id && 'active'}`} onClick={handleClick}>
        {name}
    </section>)
}
export { FilterSalesSingle }