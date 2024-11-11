import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Form } from "../components/Form/Form";
import TableComponent from "../components/table/Table";

export const Home = () => {
  const { auth } = useAuth({});
  const [suplidoresData, setSuplidoresData] = useState([]);

  const fetchSuplidoresData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/procedures/execute",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
          body: JSON.stringify({
            procedureName: "p_traer_suplidores",
            procedureParams: {},
          }),
          credentials: "include",
        }
      );

      const data = await response.json();

      setSuplidoresData(Array.isArray(data.result) ? data.result : []);
    } catch (error) {
      console.error("Error fetching suplidores data:", error);
    }
  };

  useEffect(() => {
    fetchSuplidoresData();
  }, []);

  return (
    <div className="min-h-screen p-4 bg-neutral-100 flex flex-col ">
      <Form />
      <div className="w-full sm:w-11/12 md:max-w-3xl">
        <TableComponent data={suplidoresData} search={true} />
      </div>
    </div>
  );
};
