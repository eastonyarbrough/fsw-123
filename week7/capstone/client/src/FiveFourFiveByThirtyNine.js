export default function FiveFourFiveByThirtyNine(props) {
    const filtered = props.ammo.filter(e => e.gauge === "5.45x39mm")
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