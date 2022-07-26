import './App.css';
import { useState } from 'react';

function countInitial() {
  console.log('hi');
  return 4;
}

function App() {
const [count, setCount] = useState(() => 
  countInitial());

 function decrementCount() {
   setCount(prevCount => prevCount - 1);
 }
 function incrementOne () {
   setCount(prevCount => prevCount + 1);
  }
  return (
    <>
      <button onClick={incrementOne}>+</button>
      <span>{count}</span>
      <button onClick={decrementCount}>-</button>
    </>
  );
}

export default App;
