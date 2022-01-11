export default function NineByThirtyNine(props) {
    const filtered = props.ammo.filter(e => e.gauge === "9x39mm")
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