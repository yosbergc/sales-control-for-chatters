import './infocard.css'
function InfoCard({title, data}) {
    return (
        <section className="infocard">
            <h2>{title}</h2>
            <p>{data}</p>
        </section>
    )
}
export { InfoCard }