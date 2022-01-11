export default function FortyFive(props) {
    const filtered = props.ammo.filter(e => e.gauge === ".45 ACP")
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