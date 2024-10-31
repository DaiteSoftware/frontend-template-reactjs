import React, { useEffect } from "react";
import { useState } from "react";
export const Input = ({ item }) => {
  const [value, setValue] = useState(item.initialValue || "");
  const displayErrorMessage = false;
  useEffect(() => {

  }, []);
  return (
    <div className={`mb-6 `}>
      <label htmlFor={`${item.name}-input`} className="block mb-1 text-sm font-medium text-gray-900"> {item.name} </label>
      <input
        id={`${item.name}-input`}
        name={item.name}
        value={value}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        onChange={(event) => setValue(event.currentTarget.value)}
        required={item?.required || false}
        disabled={item?.disabled || false}
      />
      {displayErrorMessage ? (
        <span
          role="alert"
          id={`${item.name}-error`}
          className=" text-red-700 px-4"
        >
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};
