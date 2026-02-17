import React, {useState } from 'react'

function Component2() {
    let[a,b] = useState(false)
  return (
    <div>
        <h4 className={a===true ? "text-green-500" : "text-red-500"}>{a===true ? "hello" : "Hey"}</h4>
        <button onClick={()=>b(!a)}>change</button>
    </div>
  )
}

export default Component2