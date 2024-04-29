import './Filters.css'
function FiltersSection ({activeFilter, handleFilters}) {
    const handleClick = (date) => {
        handleFilters({
            today: date === 'today',
            last7: date === 'last7',
            last15: date === 'last15',
            last30: date === 'last30'
        })
    }
    return (<>
        <section className={`filter-single ${activeFilter.today === true && 'active'}`} onClick={() => {handleClick('today')}}>
        Hoy
    </section>
    <section className={`filter-single ${activeFilter.last7 === true && 'active'}`} onClick={() => {handleClick('last7')}}>
        Últimos 7 días
    </section>
    <section className={`filter-single ${activeFilter.last15 === true && 'active'}`} onClick={() => {handleClick('last15')}}>
        Últimos 15 días
    </section>
    <section className={`filter-single ${activeFilter.last30 === true && 'active'}`} onClick={() => {handleClick('last30')}}>
        Último mes
    </section>
    </>)
}
export { FiltersSection }