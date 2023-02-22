import axios from 'axios'

const API_URL = 'https://apidev.kanvas.dev/v2/';

export function authUser(user) {
  return new Promise((success, reject) => {
      axios.post(`${API_URL}auth`, {user})
          .then(({ res }) => {
              console.log("API correctly fetching")
              console.log(res)
              success(res);
          })
          .catch((error) => {
              console.log("API Error")
              reject(error);
          });
  });
}

export function getUsers() {
  return new Promise((success, reject) => {
      axios.post(`${API_URL}users`)
          .then(({ res }) => {
              console.log("API correctly fetching")
              console.log(res)
              success(res);
          })
          .catch((error) => {
              console.log("API Error")
              reject(error);
          });
  });
}