import React, { useState } from 'react'
import Component2 from './Component2.jsx';

function App() {
  let [a,b] = useState(69);
  let [c,d] = useState(69);
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center justify-center text-white text-4xl font-bold">
      <h1>
        {a}
      </h1>
      <button onClick={()=>{
        b(a+1);
        d(c-1);
      } } className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">+</button>
      <button onClick={()=>{
        b(a-1);
        d(c+1);
      }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">-</button>     
      <Component name = "rohan" age = {c}/>

      <Component2/>
    </div>
  )
}

export default App
