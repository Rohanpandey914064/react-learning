import React, { useState } from 'react'
import './CountButton.css'


const CountButton = () => {
    const [count,setCount] = useState(0);
    function increase(){
        setCount(count + 1);
    }
    function decrease(){
        setCount(count - 1);
    }
  return (
    <div>
        <h1>Count Number</h1>
        <h2>{count}</h2>
        <button onClick={increase} className='counter'>+</button>
        <button onClick={decrease} className='counter'>-</button>
    </div>
  )
}

export default CountButton