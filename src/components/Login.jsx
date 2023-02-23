import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { authUser } from '../api/apidev'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { setAuth } = useAuth()
  const from = location.state?.from?.pathname || "/"

  const submit = async (event) => {
    event.preventDefault()
    const data = {email: email, password: password}
    const resp = await authUser(data)
    if (resp.session){
      setAuth(resp)
      navigate(from, {replace: true})
    }
    else{
      setError(resp.response.data.error)
    }
}
  return (
    <div>
        <form onSubmit={submit}>
            <input
                name="email"
                type="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
                placeholder='Email...'
            />
            <input
                name="password"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder='Password...'
            />
            <button>Submit</button>
            <p>{error}</p>
        </form>
        <p>If you dont have an account please click <a href='/register'>here</a> to register</p>
      </div>
  )
}

export default Login