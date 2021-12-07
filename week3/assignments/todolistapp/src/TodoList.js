import Todo from './Todo.js'

export default function ToDoList(props) {
    return (
        props.task.map((e) => {
            return (
                <Todo
                    task = {e}
                    completeToDo = {props.completeToDo}
                    deleteToDo = {props.deleteToDo}
                />
            );
        })
    );
}