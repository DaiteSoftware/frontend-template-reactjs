import axios from "axios";

const URL = "localhost:8080/api";

const MyAxios = axios.create({ baseURL: URL });

export function authUser(user) {
  return new Promise((success, reject) => {
    MyAxios.post("/login", user, { headers: { "Content-Type": "text/plain" } })
      .then(({ data }) => {
        console.log("API correctly fetching");
        success(data);
      })
      .catch((error) => {
        console.log("API Error");
        reject(error);
      });
  });
}

export default MyAxios;
