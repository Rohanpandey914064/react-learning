// import React, { useState } from 'react'
// import {useSelector,useDispatch} from "react-redux";
// import {addtodo,deletetodo,toggle} from "../redux/action";

// const Todo = () => {

//     const [task,setTask] = useState("");
//     const todos = useSelector(state => state.todos);
//     const dispatch = useDispatch();
    
    
//   return (
//     <div>
//             <input
//   placeholder="ENTER TASK"
//   value={task}
//   onChange={(e) => setTask(e.target.value)}
// />

// <button onClick={() => dispatch(addtodo(task))}>
//   Add Input
// </button>
        
//         {/* {
//         todos.map(todo => (
//             <div key={todo.id}>
                
//             </div>
//         ))
//         } */}

//          {todos.map(todo => (
//         <div key={todo.id}>
//           <span
//             onClick={() => dispatch(toggleTodo(todo.id))}
//             style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
//           >
//             {todo.text}
//           </span>
//           <button onClick={() => dispatch(deleteTodo(todo.id))}>X</button>
//         </div>
//       ))}
//     </div>
    
//   )
// }

// export default Todo


import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addtodo, deletetodo, toggle } from "../redux/action";

const Todo = () => {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() === "") return;
    dispatch(addtodo(task));
    setTask(""); // clear input after adding
  };

  return (
    <div>
      <input
        placeholder="ENTER TASK"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add Input
      </button>

      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            onClick={() => dispatch(toggle(todo.id))}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {todo.text}
          </span>

          <button onClick={() => dispatch(deletetodo(todo.id))}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;