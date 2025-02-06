import { useState,useEffect } from "react"
import "../components/First.css"
function First() {
  let [arr,changeArr]=useState([1,2,3,4,5]) 
  let [temp,setTemp]=useState(6)
  let [copy,changeCopy]=useState(arr)

  function handledeleteArray(){
    changeCopy(arr)
    copy.pop()
    changeArr(copy)
    console.log(arr)
  }
  // QUESTION 1:
  function handleArray(){
    setTemp(temp+1)
    changeArr([...arr,temp])
    console.log(arr)
  }
  return (
    <div className="raja">
      
    <button onClick={()=>{handleArray()}}>click to add element</button>
    <button onClick={()=>{handledeleteArray()}}>click to DELETE element</button>
    {
      arr.map((element,index)=>(
        <h2 key={index}>{element}</h2>
      ))
    }
    </div>
  )
}

export default First