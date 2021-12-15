import {v4 as uuidv4} from 'uuid';

const MyTodos = [
    {id: uuidv4(), task: "Clean the kitchen", isCompleted: false},
    {id: uuidv4(), task: "Mow the lawn", isCompleted: false},
    {id: uuidv4(), task: "Do the laundry", isCompleted: false},
    {id: uuidv4(), task: "Pay the bills", isCompleted: false},
    {id: uuidv4(), task: "Go grocery shopping", isCompleted: false}
]

export default MyTodos;