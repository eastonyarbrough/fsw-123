export default function FourSixByThirty(props) {
    const filtered = props.ammo.filter(e => e.gauge === "4.6x30mm")
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