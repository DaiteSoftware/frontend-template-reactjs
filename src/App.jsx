import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'
import NotFoundPage from './components/NotFoundPage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='login' element={<Login/>} />
        <Route path='/' element={<Home/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
