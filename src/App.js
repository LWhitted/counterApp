import logo from './logo.svg';
import './App.css';
import {useState} from "react"

const App = () => {
  const [counter, setCounter] = useState(0)
  const handleClick1 = () => {
    setCounter(counter + 1)
  }
  const handleClick2 = () => {
    setCounter(counter - 1)
  }
  const handleClick3 = () => {
    setCounter(counter + 5)
  }
  const handleClick4 = () => {
    setCounter(counter - 5)
  }

  return (
    <div className= "container">
    <div className="counter">
    <h2>
      Here is a counter using REACT!
    </h2>
    {counter}
    <button className="buttons" onClick={handleClick1}>Increment</button>
    <button className="buttons" onClick={handleClick2}>Decrement</button>
    <button className="buttons" onClick={handleClick3}>ADD 5</button>
    <button className="buttons" onClick={handleClick4}>DECREASE 5</button>
    </div>
    </div>
  )
  
  
}

export default App;
