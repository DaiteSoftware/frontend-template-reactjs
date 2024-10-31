import React, { useState } from "react";
import { Input } from "../Input";

export const Form = () => {
  const [fakeJson, setJson] = useState([
    { name: "Names", class: "" },
    { name: "Names", class: "" },
  ]);

  return (
    <div>
      <form
        action=""
        className="xl:w-10/12"
        onSubmit={(event) => {
          event.preventDefault();
          const result = []
          for (let item in event.target.elements){
            console.log(item.value)
          }
        }}
      >
        <Input item={{ name: "Names", class: "" }} />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
