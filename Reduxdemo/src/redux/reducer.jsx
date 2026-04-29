const initialstate = {
  todo: []
}

export const todoreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todo: [...state.todo, action.payload],
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
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      }

    default:
      return state;
  }
}
