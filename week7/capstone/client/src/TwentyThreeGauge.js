export default function TwentyThreeGauge(props) {
    const filtered = props.ammo.filter(e => e.gauge === "23ga")
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