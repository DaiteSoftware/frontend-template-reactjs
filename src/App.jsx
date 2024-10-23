import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
