import Todo from './Todo.js'

export default function ToDoList(props) {
    let count = 0;
    return (
        props.task.map((e) => {
            count++
            return (
                <Todo
                    key = {e.id}
                    task = {e}
                    completeToDo = {props.completeToDo}
                    deleteToDo = {props.deleteToDo}
                    count = {count}
                />
            );
        })
    );
}