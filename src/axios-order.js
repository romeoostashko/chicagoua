import axios from "axios";

const instance = axios.create({
  baseURL: "https://uainusa-338b5-default-rtdb.firebaseio.com/",
});

export default instance;
