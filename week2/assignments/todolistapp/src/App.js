import './App.css';
import MyList from './TodoList.js'
import todos from './STORE.js'

function App() {
  return (
    <ul>
      {todos.map((e, i) => <MyList
        key = {i}
        task = {todos[i].task}
      />)}
    </ul>
  );
}

export default App;