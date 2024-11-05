import React from "react";
import useAuth from "../hooks/useAuth";

export const Home = () => {
  const { auth } = useAuth({});

  return (
    <div>
      <h1>Bienvenido {auth?.user?.usuario}</h1>
    </div>
  );
};
