import {useState} from 'react';

export default function TodoForm(props) {
    const [userInput, storeInput] = useState("");

    const changeState = () => storeInput(document.querySelector("#inputValue").value)
    
    return(
        <div id="inputCont">
            <input type="text" placeholder="Please enter Todo" id="inputValue" onChange={() => changeState()}></input>
            <button onClick={() => {
                if (document.querySelector("#inputValue").value !== "") {
                    props.addTodo(userInput);
                    document.querySelector("#inputValue").value = "";
                }
                else if (document.querySelector("#inputValue").value === "") {
                    const removeErr = () => {
                        document.querySelector("#errMsg").remove();
                    }
                    const errMsg = document.createElement("h3");
                    errMsg.textContent = "Input field is empty";
                    errMsg.id = "errMsg";
                    errMsg.style = "color: red";
                    document.querySelector("#inputCont").appendChild(errMsg);
                    setTimeout(removeErr, 1500);
                }
            }}>Submit</button>
        </div>
    );
};