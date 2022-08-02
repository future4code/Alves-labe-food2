import React from "react";
import useForm from "../../../hooks/useForm";
import { useNavigate } from "react-router";

const [Loading, setLoading] = useState(false);
const [Password, setPassword] = useState(false);

const TelaCadastro = () => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const navigate = useNavigate();

  const onClickPassword = () => {
    setPassword(!Password);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <button>Cadastrar</button>
      <div>
        <form>
          <imput
            onSubmit={onSubmitForm}
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
            placeholder={"Nome e sobrenome"}
          />

          <imput
            name={"email"}
            value={form.email}
            onChange={onchange}
            label={"Name"}
            variant={"E-mail"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
            placeholder={"email@email.com"}
          />

          <imput
            name={"cpf"}
            value={form.cpf}
            onchange={onchange}
            label={"CPF"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"number"}
            placeholder={"000.000.000-00 "}
            inputpros={{ pattern: "^d{3}.d{3}.d{3}-d{2}$" }}
          />

          <imput
            name={"password"}
            value={form.password}
            onchange={onchange}
            label={"senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={Password ? "text" : "password"}
            placeholder={"minimo de 6 caracteres"}
            inputpros={{ pattern: "^.{6}" }}
          />
          <imput
            name={"confirm_password"}
            value={form.password}
            onchange={onChange}
            label={"confirmar"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={Password ? "text" : "password"}
            placeholder={"confirme a senha anterior"}
            inputpros={{ pattern: "^.{6}" }}
          />
        </form>
      </div>
    </div>
  );
};

export default TelaCadastro;
