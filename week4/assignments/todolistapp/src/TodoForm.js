import {useState} from 'react';

export default function TodoForm(props) {
    const [userInput, storeInput] = useState("");

    const changeState = () => {
        storeInput(document.querySelector("#inputValue").value)
    }
    
    return(
        <div>
            <input type="text" placeholder="Please enter Todo" id="inputValue" onChange={() => changeState()}></input>
            <button onClick={() => props.addTodo(userInput)}>Submit</button>
        </div>
    );
};