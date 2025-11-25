import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const handlehover = () => {
    alert("i am good")
  }

  const handleclick = () => {
    alert("i am good")
  }

  const handlechange = (e) => {
    alert(e.target.value)
  }

  const handlesubmit = (e) => {
    e.preventDefault();
    alert("shall i submit")
  }

  return (
    <>
     <div>
          
          <button onClick={handleclick} onMouseOver={handlehover}>
            click me 
          </button>
    
          <form onSubmit={handlesubmit}>
            <input type="text" onChange={handlechange} />
            <button type="submit">Submit</button>
          </form>

          
      
     </div>
    </>
  )
}
export default App
