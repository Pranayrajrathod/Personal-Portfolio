import Products from "./components/Products"
import "../src/App.css"
import {useState} from 'react'
function App() {
  let i=1
  let [a,setAMethod]=useState(10)
  function handleClick(){
    setAMethod(a+1)    
  }
  return (
    <div>
      <h1>value od hook : {a}</h1>
      <button onClick={()=>handleClick()}>Magic Click</button>
      <Products/>
      {/* <h1>{a}</h1> this is wrong 
      <button onClick={handleClick}>click</button> */}
    </div>
  )
}

export default App