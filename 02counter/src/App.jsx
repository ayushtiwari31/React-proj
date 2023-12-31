import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(15);

  const addvalue=()=>{
    if(counter<=19)
    setcounter(counter+4);
    setcounter(counter+1);
    setcounter(counter+1);
  }
  const removevalue=()=>{
    if(counter>=1)
    setcounter(counter-1);
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addvalue}>add value</button>
      <br />
      <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
