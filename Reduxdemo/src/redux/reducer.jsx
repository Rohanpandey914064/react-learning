const initialstate = {
  todo: [],
  user:"rohan pandey",
  theme:"light"
}

export const todoreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, {id:Date.now(),text:action.payload,completed: false}],
      }

    case "DELETE_TODO":
      return {
        ...state,
        todo: state.todo.filter(item => item.id !== action.payload),
      }

    case "TOGGLE":
      return {
        ...state,
        todo: state.todo.map(item =>
          item.id === action.payload ? { ...item, completed: !item.completed }: item
        ),
      }

    default:
      return state;
  }
}
