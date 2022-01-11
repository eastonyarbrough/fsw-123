export default function SevenSixTwoByTwentyFive(props) {
    const filtered = props.ammo.filter(e => e.gauge === "7.62x25mm")
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