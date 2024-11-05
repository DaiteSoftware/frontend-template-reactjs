import React from "react";
import useAuth from "../hooks/useAuth";
import { Form } from "../components/Form/Form";

export const Home = () => {
  const { auth } = useAuth({});

  return (
    <div>
      <Form />
    </div>
  );
};
