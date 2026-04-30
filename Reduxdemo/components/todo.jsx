import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import {addtodo,deletetodo,toggle} from "../redux/action";

const todo = () => {

    const [task,setTask] = useState("");
    const todos = useSelectore(state => state.todos);
    const dispatch = useDispatch();
    
    
  return (
    <div>
        <form onSubmit={}>
            <input
                type="text" placeholder='ENTER TASK' value={task} onChange={(e)=>setText(e.target.value)}/>
            <button onClick={() => dispatch(addtodo(text))}>Add Input</button>
        </form>
        
        {todos.map(todo => (
            <div key={todo.id}>
                
            </div>
        ))
        }
    </div>
    
  )
}

export default todo