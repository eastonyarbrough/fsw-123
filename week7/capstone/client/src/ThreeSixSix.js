export default function ThreeSixSix(props) {
    const filtered = props.ammo.filter(e => e.gauge === ".366 TKM")
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