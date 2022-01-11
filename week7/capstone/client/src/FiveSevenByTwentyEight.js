export default function FiveSevenByTwentyEight(props) {
    const filtered = props.ammo.filter(e => e.gauge === "5.7x28mm")
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