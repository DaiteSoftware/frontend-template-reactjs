import React from 'react'
import { useState } from 'react'
import { authUser, getUsers } from '../api/apidev'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = (event) => {
    event.preventDefault()
    const data = {email: email, password: password}
    authUser(data)
    console.log(data)
}
  return (
    <div>
        <form onSubmit={submit}>
            <input
                name="email"
                type="email"
                onChange={event => setEmail(event.target.value)}
                value={email}
            />
            <input
                name="password"
                type="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />
            <button>Submit</button>
        </form>
        <p>If you dont have an account please click <a onClick={() => {console.log("hello")}}>here</a> to register</p>

        <button onClick={async () => { const res = getUsers()
        console.log(res)}}>test</button>
      </div>
  )
}

export default Login