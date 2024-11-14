import axios from "axios";

const URL = "http://localhost:8080/api";

const MyAxios = axios.create({ baseURL: URL, withCredentials: true, headers: { "Content-Type": "application/json" } });

export const authUser = (user) => {
  return new Promise((success, reject) => {
    MyAxios.post("login", user)
      .then(({ data }) => {
        success(data);
      })
      .catch(({ response }) => {
        reject(response);
      });
  });
};


export const executeProcedure = (procedureName, procedureParams) => {
  return new Promise((success, reject) => {
    MyAxios.post("procedures/execute", { procedureName, procedureParams })
      .then(({ data }) => {
        success(data);
      })
      .catch(({ response }) => {
        reject(response);
      });
  });
};

