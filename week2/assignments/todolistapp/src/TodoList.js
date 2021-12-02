export default function MyList(props) {
    return (
        <li>
            <input type="checkbox"></input>
            <label>{props.task}</label>
        </li>
    );
}