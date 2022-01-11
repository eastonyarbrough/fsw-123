export default function ThreeThreeEight(props) {
    const filtered = props.ammo.filter(e => e.gauge === ".338 Lapua Magnum")
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