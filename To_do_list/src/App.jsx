import { useEffect } from "react"
import Counter from "./Counter"
import Search from "./search"
import ToDoList from "./ToDoLIst"
function App() {
  return (
    <>
      <ToDoList/>
      <Counter/>
      <Search/>
    </>
  )
}

export default App
