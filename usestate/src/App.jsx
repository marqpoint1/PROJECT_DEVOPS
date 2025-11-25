import { useState } from 'react'
import './App.css'


function App() {
  const [total , setTotal] = useState(0);

  function handletotal(){
   setTotal(total + 1)
  }

  return (
    
      <div>
      
      

       <button onClick={handletotal}> 
        click me
       </button>

       <p> {total}</p>

      </div>
     
    
  )
}

export default App
