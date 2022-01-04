import {useState} from 'react'

export default function Todo(props) {
    const [editBtn, setEditBtn] = useState();
    const [editClicked, setEditClicked] = useState(false);
    const [updateClicked, setUpdateClicked] = useState(false);

    const toggleDisableEdit = () => setEditBtn((disabled) => !disabled);
    const toggleEdit = () => setEditClicked((change) => !change);
    const toggleUpdate = () => setUpdateClicked((change) => !change);

    if (editClicked === false && updateClicked === false) {
        return(
            <li id={props.task.key} style={{textDecoration: props.task.isCompleted ? "line-through" : "" }}>
                <input type="checkbox" onChange={() => {
                    props.completeToDo(props.task, props.task.id);
                    toggleDisableEdit();
                }}></input>
                <label>{props.task.task}</label>
                <button onClick={() => props.deleteToDo(props.task.id)}>X</button>
                <button onClick={() => toggleEdit()} disabled={editBtn}>Edit</button>
            </li>
        )
    }
    else if (editClicked === true && updateClicked === false) {
        return(
            <li>
                <input type="text" id={`update${props.count}`} defaultValue={props.task.task} onChange={() => {
                     if (document.querySelector(`#update${props.count}`).value === "") {
                         document.querySelector(`#upBtn${props.count}`).disabled = true;
                     }
                     else if (document.querySelector(`#update${props.count}`).value !== "") {
                         document.querySelector(`#upBtn${props.count}`).disabled = false;
                     }
                }}></input>
                <button id={`upBtn${props.count}`} onClick={() => {
                    props.task.task = document.querySelector(`#update${props.count}`).value;
                    toggleUpdate()
                }}>Update</button>
                <button onClick={() => toggleEdit()}>Cancel</button>
            </li>
        )
    }
    else if (editClicked === true && updateClicked === true) {
        toggleEdit();
        toggleUpdate();
        return(
            <li id={props.task.key} style={{textDecoration: props.task.isCompleted ? "line-through" : "" }}>
            <input type="checkbox" onChange={() => {
                props.completeToDo(props.task, props.task.id);
                toggleDisableEdit();
            }}></input>
            <label>{props.task.task}</label>
            <button onClick={() => props.deleteToDo(props.task.id)}>X</button>
            <button onClick={() => toggleEdit()} disabled={editBtn}>Edit</button>
        </li>
        )
    }
}