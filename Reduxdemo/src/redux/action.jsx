export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE = "TOGGLE";

export const addtodo=(text)=>({
    type: ADD_TODO,
    payload: text
})

export const deletetodo=(id)=>({
    type: DELETE_TODO,
    payload: id
})

export const toggle=()=>({
    type: TOGGLE
})