import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const[count,setCount] = useState(0);
  return (
    <div className='counter'>
    <p>
        <h1>click this {count}  button</h1>
        <button onClick={() => setCount(count + 1)}>click me </button>
    </p>

    </div>
  )
}

export default Counter