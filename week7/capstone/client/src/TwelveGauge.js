export default function TwelveGauge(props) {
    const filtered = props.ammo.filter(e => e.gauge === "12ga")
    return(
        filtered.map(e => {
            return(
                <div>
                    <h3>{e.name}</h3>
                </div>
            )
        })
    )
}