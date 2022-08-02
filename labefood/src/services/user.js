import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { goToAdress } from "../router/coordenator";

export const signUp = (body, clear, setLoading) => {
  setLoading(true);
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      window.alert("Cadastro efetuado com sucesso!");
      clear();
      setLoading(false);
      goToAdress("/endereco");
    })
    .catch((err) => {
      setLoading(false);
      window.alert(err.response.data.message);
    });
};
