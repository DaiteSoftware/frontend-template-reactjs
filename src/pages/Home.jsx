import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Form } from "../components/Form/Form";
import TableComponent from "../components/table/Table";
import { executeProcedure } from "../api/index";

export const Home = () => {
  const { auth } = useAuth({});
  const [suplidoresData, setSuplidoresData] = useState([]);

  const fetchSuplidoresData = async () => {
    try {
      const data = await executeProcedure("p_traer_suplidores", {});
      setSuplidoresData(Array.isArray(data.result) ? data.result : []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSuplidoresData();
  }, []);

  return (
    <div className="min-h-screen p-4 bg-neutral-100 flex flex-col">
      <Form />
      <div className="w-full sm:w-11/12 md:max-w-3xl">
        <TableComponent data={suplidoresData} search={true} />
      </div>
    </div>
  );
};
