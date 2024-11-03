import { useState } from "react"
import {v4 as uuidv4} from 'uuid';

export default function ToDoList() {

    let [todos , setTodos] = useState([{task:"sample task" , id:uuidv4() , isDone:false}]);
    let [newTodo , setNewTodo] = useState("");

    let done = (id) => {
        setTodos((todos) => todos.map((props)=> {
            if(props.id == id){
                return {...props , isDone:true}
            }else{
                return props;
         }}
    ))
    }

    let doneAll = () => {
        setTodos((prevDone) => 
            prevDone.map((props) => ({
                ...props , isDone : true
            }))
        );
    }

    let addNewTodo = () => {
        setTodos((prevTodos) => {
            return [...prevTodos , {task:newTodo , id:uuidv4() , isDone : false}]
        })
        setNewTodo("");
    }

    let updateTodo = (event) =>{
        setNewTodo(event.target.value);  
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id))
    }

    let uppercaseAll = () => {
        setTodos((prevTodos) => prevTodos.map((props)=>{
            return { ...props ,task: props.case ? props.task.toLowerCase() : props.task.toUpperCase() 
            }
        }
            )
        )
    }

    let upperCase = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((props) => {
                if(props.id == id){
                    return {
                        ...props , task:props.task.toUpperCase() 
                    }
                }else{
                    return props
                }
            })     
        
        )
    }

    return (
        <div>
            <input placeholder="Add a Task" 
            type="text" 
            onChange={updateTodo}
            value={newTodo} />
            <button onClick={addNewTodo}>Add</button>
            <br />
            <br />
            <hr />
            <h4>ToDo List</h4>
            <ul>
                {todos.map((props) => {
                    return (<li key = {props.id}> <span onClick={() => done(props.id)}>{props.isDone ? <i className="ri-check-double-line"></i> : <i className="ri-survey-line"></i>}</span> <span style={{textDecorationLine: props.isDone ? "line-through" : "none"}}>{props.task}</span>  &nbsp; &nbsp; <i onClick={()=> deleteTodo(props.id)} className="ri-delete-bin-6-line"></i> &nbsp; &nbsp; <i onClick={ () => upperCase(props.id)} className="ri-arrow-up-circle-line"></i></li> )
                })}

            </ul>

            <button onClick={uppercaseAll}>Uppercase All</button>
            <button onClick={doneAll}>All Done</button>
        </div>
    )
}