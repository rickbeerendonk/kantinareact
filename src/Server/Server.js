import axios from "axios";

/* let postDateToServer = {
  email: "berzi-nawzad.wasfy@capgemini.com"
};

let axiosConfig = {
  headers: {
    "Content-Type": "application/json",
    "cache-control": "no-cache"
  }
}; */
let url = "https://kantinefunctions.azurewebsites.net/api";

const instance = axios.create({
  baseURL: url,
});

export default instance;
