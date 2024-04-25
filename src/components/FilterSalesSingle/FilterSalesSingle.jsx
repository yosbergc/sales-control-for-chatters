import './FilterSalesSingle.css'
function FilterSalesSingle ({name, isActive}) {
    return (<section className={`filter-single ${isActive && 'active'}`}>
        {name}
    </section>)
}
export { FilterSalesSingle }