import React from "react";
import useAuth from "../hooks/useAuth";
import { Navbar } from "../components/Navbar";
import { Form } from "../components/Form/Form";

export const Home = () => {
  const { auth } = useAuth({});

  return (
    <div>
      <Navbar />
      <Form />
    </div>
  )
}
