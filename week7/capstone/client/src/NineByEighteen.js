export default function NineByEighteen(props) {
    const filtered = props.ammo.filter(e => e.gauge === "9x18mm")
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