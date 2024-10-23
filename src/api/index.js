import axios from "axios";

const URL = "http://localhost:8080/api";

const MyAxios = axios.create({ baseURL: URL });

export const authUser = (user) => {
  return new Promise((success, reject) => {
    MyAxios.post("login", user, { headers: { "Content-Type": "application/json" } })
      .then(({data}) => {
        console.log("API correctly fetching");
        success(data);
      })
      .catch(({response}) => {
        console.log("API Error");
        reject(response);
      });
  });
}
