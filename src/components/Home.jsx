import React from "react";
import { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Home() {
  const { auth } = useAuth({});

  return (
    <div>
      <h1>Bienvenido {auth?.user?.usuario}</h1>
    </div>
  )
}

export default Home;
