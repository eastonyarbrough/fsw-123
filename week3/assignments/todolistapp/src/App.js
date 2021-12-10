import {useState} from 'react';
import './App.css';
import ToDoList from './TodoList.js';
import MyTodos from './STORE.js'


function App() {
  const [todos, changeToDo] = useState(MyTodos)

  const completeToDo = (selTask, selID) => {
    const copyList = [...todos];
    const targetItem = copyList.findIndex(e => e.id === selID);

    if (selTask.isCompleted === false)
      selTask.isCompleted = true;
    else if (selTask.isCompleted === true)
      selTask.isCompleted = false;

    copyList.splice(targetItem, 1, selTask)
    changeToDo(copyList);
  }

  const deleteToDo = (selID) => {
    const copyList = [...todos];
    const targetItem = copyList.findIndex(e => e.id === selID);
    copyList.splice(targetItem, 1)
    changeToDo(copyList);
  }

  return (
    <div id="todoCont">
      <h1>ToDo List!</h1>
      <ul>
        <ToDoList 
          task = {todos}
          completeToDo = {completeToDo}
          deleteToDo = {deleteToDo}
        />
      </ul>
    </div>
  );
}

export default App;