import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div className="App">
      <div>
        <input name='email' placeholder='login'/>
        <input name='passowrd' placeholder='password'/>
        <button>Send</button>
      </div>
    </div>
  )
}

export default App
