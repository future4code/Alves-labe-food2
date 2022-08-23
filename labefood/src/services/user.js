import { BASE_URL } from "../constants/url";
import axios from "axios";
import { goToAddress } from "../router/coordenator";
import Swal from "sweetalert2";

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

export const Signup = (body, clear, navigate, setLoading) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      goToAddress(navigate);
    })
    .catch((err) => {
      setLoading(false)
      Swal.fire({
        text: "Email ou CPF já cadastrados"
      })
    });
};
