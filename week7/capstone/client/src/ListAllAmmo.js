export default function ListAllAmmo(props) {
    return(
        props.ammo.map(e => {
            return(
                <div>
                    <h3>{e.name}</h3>
                </div>
            )
        })
    )
}