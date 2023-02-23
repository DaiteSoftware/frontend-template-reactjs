import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Navigate} from "react-router-dom";
import { getUsers } from "../api/apidev"
import useAuth from "../hooks/useAuth";
import MyAxios from "../api/apidev";


function Home() {
  const [users, setUsers] = useState([])
  const { auth } = useAuth();
  const location = useLocation();


  useEffect( () => {
    const startFetching = async () => {
        const response = await getUsers(auth.session.token)
        setUsers(response.data)
    }
    startFetching()
  }, [])
  return (
    auth?.session ?
     <div>
    <ul>
      {users.map((item, index) => {return <li key={index}>{item.email}</li>})}
    </ul>
     </div> : <Navigate to='/login' state={{from: location}} replace/>
  )
}

export default Home