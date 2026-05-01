const initialstate = {
  todo: [],
  user:"rohan pandey",
  theme:"light"
}

// export const todoreducer = (state = initialstate, action) => {
//   switch (action.type) {
//     case "ADD_TODO":
//       return {
//         ...state,
//         todo: [...state.todo, {id:Date.now(),text:action.payload,completed: false}],
//       }

//     case "DELETE_TODO":
//       return {
//         ...state,
//         todo: state.todo.filter(item => item.id !== action.payload),
//       }

//     case "TOGGLE":
//       return {
//         ...state,
//         todo: state.todo.map(item =>
//           item.id === action.payload ? { ...item, completed: !item.completed }: item
//         ),
//       }

//     default:
//       return state;
//   }
// }

//redux
const todoSlice=createSlice({
  name:"todo",
  initialState,
  reducers:
  {
    addtodo:(state,action) => {
      state.todos.push({
        id:Date.now(),
        text:action.payload,
        completed:false
      })
    },
    deletetodo:(state,action)=>{
      state.todos = state.todos.filter(todo=>todo.id !== action.payload)
    },
    toggletodo:(state,action)=>{
      state.todos = state.todo.map(item =>item.id === action.payload ? { ...item, completed: !item.completed }: item)
    }
  }
})

export const {addtodo,deletetodo,toggletodo}=todoSlice.action;
export default todoSlice.reducer;