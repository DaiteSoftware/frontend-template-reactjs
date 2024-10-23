import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Home() {
  const [procedure, setProcedure] = useState("")
  const [users, setUsers] = useState([]);
  const { auth } = useAuth({});
  const location = useLocation();

  useEffect(() => {
  }, []);
  const submit = (event) => {
    event.preventDefault()
    const data = {procedure: procedure}
  }
  return auth.token ? (
    <div>
      <h1>Bienvenido {auth.user}</h1>
      <form onSubmit={submit}>
      <input
          name="procedure"
          type="procedure"
          value={procedure}
          onChange={(event) => setProcedure(event.target.value)}
          placeholder="Procedure..."
        />
      <button>Submit</button>
      </form>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default Home;
