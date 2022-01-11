export default function FortyByFortySix(props) {
    const filtered = props.ammo.filter(e => e.gauge === "40x46mm")
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