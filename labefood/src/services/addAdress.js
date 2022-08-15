import axios from "axios";
import { BASE_URL } from "../constants/url";

export const addAdress = (body, navigate, cleanFields, goToLogin) => {
  const config = {
    method: "put",
    url: BASE_URL + "/address",
    headers: { auth: localStorage.getItem("token") },
    data: body,
  };
  axios(config)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      window.alert("Seu endereço foi salvo!");
      cleanFields();
      goToLogin(navigate);
    })

    .catch((err) => {
      window.alert(err.response);
      console.log(err.response.data);
    });
};

export const putUpdateProfile = (body) => {
  const config = {
    method: "put",
    url: BASE_URL + "/profile",
    headers: { auth: localStorage.getItem("token") },
    data: body,
  };

  axios(config)
    .then((res) => {
      window.alert("Dados do Perfil atualizado com sucesso");
    })
    .catch((err) => {
      window.alert(err.response.data.message);
    });
};
