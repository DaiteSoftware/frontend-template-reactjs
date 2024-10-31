import axios from "axios";

const URL = "http://localhost:8080/api";

const MyAxios = axios.create({ baseURL: URL, withCredentials: true });

export const authUser = (user) => {
  return new Promise((success, reject) => {
    MyAxios.post("login", user, {
      headers: { "Content-Type": "application/json" },
    })
      .then(({ data }) => {
        success(data);
      })
      .catch(({ response }) => {
        reject(response);
      });
  });
};
