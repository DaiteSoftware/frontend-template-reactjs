import React from "react";
import useAuth from "../hooks/useAuth";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  const { auth } = useAuth({});

  return (
    <div>
      <Navbar />
      <h1>Bienvenido {auth?.user?.usuario}</h1>
    </div>
  )
}
