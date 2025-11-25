import { useState,useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  

function App() {
  const [count, setCount] = useState(0)

  function handleclick(){
    setCount(count + 1);
  }

  function double(num){
    for(var i = 0; i < 1000000000; i++){}
    return num * 2;
}
let input = 3 
  let num = useMemo(() => double(input), [input]);

  return (
    <>
         
         <button onClick={handleclick}>
          CLICK ME
         </button>

         <div>
          {count}
         </div>
    </>
  )
}

export default App
