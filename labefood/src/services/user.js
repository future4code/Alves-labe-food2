import { BASE_URL } from "../constants/url";
import axios from "axios";

export const Login = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      console.log(res.data);
      navigate("/");
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const Signup = (body, clear, navigate) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      console.log("Usuario criado com sucesso");
    })
    .catch((err) => {
      alert("Erro no login");
      console.log(err);
    });
};
