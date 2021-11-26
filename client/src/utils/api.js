import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

// for sign in using axios
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).data.token
    }`;
  }

  return req;
});

export const signIn = (userData) => API.post("/user/signin", userData);
export const signUp = (userData) => API.post("/user/signup", userData);
