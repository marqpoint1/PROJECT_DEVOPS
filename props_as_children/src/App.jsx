
import { useState } from 'react'
import './App.css'
import Card from './components/card'
import Button from './components/Button'
function App() {

  const [count,setCount] = useState(0);

  function increment(){
    setCount(count + 1);
  }

  return (
    <div>

<Button counter={increment} count={count}>
  <p>click me , from branchA + branchB </p>
</Button>

      

     {/* <Card name = "bansal ji">
      <h1>hello learner</h1>
      <p className='don'>you should focus</p>
      </Card> */}

      
    </div>
  )
}

export default App
