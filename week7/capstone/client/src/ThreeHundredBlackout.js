export default function ThreeHundredBlackout(props) {
    const filtered = props.ammo.filter(e => e.gauge === ".300 Blackout")
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