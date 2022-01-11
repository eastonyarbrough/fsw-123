export default function SevenSixTwoByFiftyOne(props) {
    const filtered = props.ammo.filter(e => e.gauge === "7.62x51mm")
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