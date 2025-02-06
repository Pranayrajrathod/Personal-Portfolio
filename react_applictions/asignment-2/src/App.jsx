import "./App.css";
import Right from "./component/Right"; 
function App(){
  return(
    <div className="full">
      <div className="left">
        <h1>REACT PROJECTS</h1>
        <p>this is the first react project i am creating on my own, i mean i have created a react based project for my hackathon in the past but i used AI to do it </p>
      </div>
      <div className="right">
        <Right></Right>
      </div>
    </div>
  )
}
export default App;