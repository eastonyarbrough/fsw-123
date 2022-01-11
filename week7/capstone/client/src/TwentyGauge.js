export default function TwentyGauge(props) {
    const filtered = props.ammo.filter(e => e.gauge === "20ga")
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