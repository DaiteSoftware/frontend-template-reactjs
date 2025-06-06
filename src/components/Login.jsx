import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { authUser } from "../api/index";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const from = location.state?.from?.pathname || "/";

  const submit = async (event) => {
    event.preventDefault();
    const data = { username: user, password: password };
    authUser(data).then((res) => {
      setAuth(
        { user: res.user,
          token: res.accessToken}
      )
      navigate('/')
    }).catch((res) => {
      setError(res.data.error)
    })
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input
          name="user"
          type="text"
          onChange={(event) => setUser(event.target.value)}
          value={user}
          placeholder="User..."
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password..."
        />
        <button>Submit</button>
        <p>{error}</p>
      </form>
    </div>
  );
}

export default Login;
