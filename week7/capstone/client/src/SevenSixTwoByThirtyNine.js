export default function SevenSixTwoByThirtyNine(props) {
    const filtered = props.ammo.filter(e => e.gauge === "7.62x39mm")
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