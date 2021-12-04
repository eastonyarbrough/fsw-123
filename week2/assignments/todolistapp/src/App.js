import './App.css';
import MyList from './TodoList.js'
import todos from './STORE.js'

function App() {
  return (
    <ul>
      <MyList task = {todos}/>
    </ul>
  );
}

export default App;