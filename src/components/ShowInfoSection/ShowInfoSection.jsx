import './ShowInfoSection.css'

function ShowInfoSection () {
    return (<section className='showInfoSection'>
        <section className="upper">
            <section className='totalGenerated'>
                <h3>Total generado hoy</h3>
                <h5>317.82$</h5>
            </section>
            <section>
                <h3>Total faltante para la meta semanal</h3>
                <h5>5783.18$</h5>
                <span>(Aproximadamente 963$ por día)</span>
            </section>
        </section>
        <section className="down">
            <button>Obtener capturas</button>
            <button>Obtener total</button>
        </section>
    </section>)
}
export { ShowInfoSection }