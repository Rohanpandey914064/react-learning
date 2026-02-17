import React from 'react'

function Component({name , age}) {
  return (
    <div className="bg-red-600 text-white p-4 rounded-lg h-60">
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
  )
}

export default Component