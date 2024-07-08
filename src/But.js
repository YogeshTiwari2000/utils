import React, { useState } from 'react'

export default function But() {
    const [count,setCount]=useState(4);
    function dec(){
        setCount(count-1)
  return (
    <div>
      <button onClick={dec}>-</button>
      <span>{count}</span>
      <button>+</button>
    </div>
  )
}
}
