import {useState} from 'react'

export default function ToDoList(props) 
{
    function handleClick() {
        alert(`Your Name is ${props}.`)
    }

    function handleClickList(e){
        if(e.target.classList.contains("deleteBtn")){
            e.target.parentElement.remove();
        }
    }

    function handleSubmit(e) {
        e.preventDefault()  // To prevent page reloading
        const input = e.target.task.value;
        const inputValue = input.trim();
        if(inputValue === ""){
            alert("Task cannot be empty.")
            return;
        }
        const li = document.createElement("li");
        // const d = document.getElementById("taskList")
        li.innerHTML = `<span>${inputValue}</span>
        <button class ="deleteBtn">Delete</button>`; 
        document.getElementById("taskList").appendChild(li);
    }

    return(
        
        <>
            <h1>To-Do App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" placeholder="Add your task here"></input>
                <input type="submit" value={"Add Task"}/>
            </form>
            <ul id="taskList" onClick={handleClickList}>
            </ul>
        </>
    )
}


// export default function TodoApp() {
//     function handleSubmit(e){
//         e.preventDefault();
//         const input = e.target.elements.task.value;
//         const hii = document.getElementById("taskList");
//         if (input.trim() === "") {
//             alert("Task cannot be empty!");
//             return;
//         }
//         const li = document.createElement("li");
//        li.innerHTML = `
//         <span>${input}</span>
//         <button class="deleteBtn">Delete</button>` ;

//         document.getElementById("taskList").appendChild(li);
//         e.target.reset();
        
//     }
//      function handleDelete(e) {
//         if (e.target.classList.contains("deleteBtn")) {
//             e.target.parentElement.remove(); 
//         }
//     }
//     return(
//         <div>
//             <form onSubmit={handleSubmit}>  
//                 <input type="text" name="task" placeholder="Write something dammit!!!" />
//                 <input type="submit" value="Add Task" />
//             </form>
//             <ul id="taskList" onClick={handleDelete}>
            
//             </ul>
            



//         </div>
//     )
// }