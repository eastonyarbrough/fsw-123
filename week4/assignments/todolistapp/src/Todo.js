export default function Todo(props) {
    return(
        <li id={props.task.key} style={{textDecoration: props.task.isCompleted ? "line-through" : "" }}>
            <input type="checkbox" onChange={() => props.completeToDo(props.task, props.task.id)}></input>
            <label>{props.task.task}</label>
            <button onClick={() => props.deleteToDo(props.task.id)}>X</button>
        </li>
    )
}

