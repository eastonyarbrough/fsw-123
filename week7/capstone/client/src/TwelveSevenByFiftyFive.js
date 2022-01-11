export default function TwelveSevenByFiftyFive(props) {
    const filtered = props.ammo.filter(e => e.gauge === "12.7x55mm")
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