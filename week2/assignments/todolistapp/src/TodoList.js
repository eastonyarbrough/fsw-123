export default function MyList(props) {
    return (
        props.task.map((e) => {
            return (
                <li>
                    <input type="checkbox"></input>
                    <label>{e.task}</label>
                </li>
            );
        })
    );
}