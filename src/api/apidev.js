import axios from 'axios'

const URL = 'https://apidev.kanvas.dev/v2'

const MyAxios = axios.create({baseURL: URL})


export function authUser(user) {
  return new Promise((success, reject) => {
      MyAxios.post('/auth', user, {headers: {'Content-Type': 'text/plain'}})
          .then(({ data }) => {
              console.log("API correctly fetching")
              success(data);
          })
          .catch((error) => {
              console.log("API Error")
              reject(error);
          });
  });
}


export function createUser(user) {
  return new Promise((success, reject) => {
    MyAxios.post('/users', user, {headers: {'Content-Type': 'text/plain'}})
          .then(({ data }) => {
              console.log("API correctly fetching")
              success(data);
          })
          .catch((error) => {
              console.log("API Error")
              console.log(error)
              reject(error);
          });
  });
}
export function getUsers(user) {
  return new Promise((success, reject) => {
    MyAxios.get('/users', {headers: {Authorization: `Bearer ${user}`}})
          .then((res) => {
              console.log("API correctly fetching")
              success(res);
          })
          .catch((error) => {
              console.log("API Error")
              reject(error);
          });
  });
}

export default MyAxios