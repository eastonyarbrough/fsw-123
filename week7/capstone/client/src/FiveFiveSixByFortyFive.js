export default function FiveFiveSixByFortyFive(props) {
    const filtered = props.ammo.filter(e => e.gauge === "5.56x45mm")
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