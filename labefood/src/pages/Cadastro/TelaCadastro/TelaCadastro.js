import React, { useState } from "react";
import useForm from "../../../hooks/useForm";
import { useNavigate } from "react-router";
import {
  ScreenContainer,
  LogoImag,
  InputsContainer,
  ArrowBackContainer,
} from "./styled";
import { Button, TextField, Typography } from "@material-ui/core";
import { Signup } from "../../../services/user";
import Logo from "../../../assets/logo-future-eats-invert.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { withStyles } from "@material-ui/core/styles";
import { goBack } from "../../../router/coordenator";

const StyledButton = withStyles({
  root: {
    padding: "0.7rem",
    marginTop: "0,7rem",
    marginBottom: "1rem",
  },
})(Button);

const TelaCadastro = () => {
  const [form, handleInputChange, clear] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });
  const [Loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const onChangeConfirm = (event) => {
    setConfirm(event.target.value);
  };

  const onClickPassword = () => {
    setConfirm(!confirm);
  };

  const onMouseDownPassword = () => {
    setConfirm(!confirm);
  };

  // const goBack = () => {
  //   navigate.goBack();
  // };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (confirm === form.password) {
      Signup(form, clear, navigate);
    }
  };

  return (
    <ScreenContainer>
      <LogoImag src={Logo} />

      <Typography variant="subtitle1" gutterBottom>
        Cadastrar
      </Typography>

      <InputsContainer>
        <form onSubmit={onSubmitForm}>
          <TextField
            name={"name"}
            value={form.name}
            onChange={handleInputChange}
            label={"Nome"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
            placeholder={"Nome e sobrenome"}
          />

          <TextField
            name={"email"}
            value={form.email}
            onChange={handleInputChange}
            label={"E-mail"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
            placeholder={"email@email.com"}
          />

          <TextField
            name={"cpf"}
            value={form.cpf}
            onChange={handleInputChange}
            label={"CPF"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"number"}
            placeholder={"000.000.000-00 (apenas números)"}
            inputProps={{ pattern: "^d{3}.d{3}.d{3}-d{2}$" }}
          />

          <TextField
            name={"password"}
            value={form.password}
            onChange={handleInputChange}
            label={"Senha"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={confirm ? "text" : "password"}
            placeholder={"Mínimo de 6 caracteres"}
            inputProps={{ pattern: "^.{6,}" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onClickPassword}
                    onMouseDown={onMouseDownPassword}
                  >
                    {confirm ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            name={"password-confirm"}
            value={confirm.password}
            onchange={onChangeConfirm}
            label={"confirmar"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={confirm ? "text" : "password"}
            placeholder={"confirme a senha anterior"}
            inputprops={{ pattern: "^.{6}" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={onClickPassword}
                    onMouseDown={onMouseDownPassword}
                  >
                    {confirm ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <StyledButton
            type={"submit"}
            fullWidth
            variant={"contained"}
            color={"primary"}
            padding={10}
          >
            {Loading ? (
              <CircularProgress color={"inherit"} size={24} />
            ) : (
              <>Criar</>
            )}
          </StyledButton>
        </form>
      </InputsContainer>
      <ArrowBackContainer>
        <IconButton
          onClick={() => goBack(navigate)}
          size="larger"
          type="submit"
          aria-label="ArrowBackIos"
        >
          <ArrowBackIos style={{ fill: "black" }} fontSize="large" />
        </IconButton>
      </ArrowBackContainer>
    </ScreenContainer>
  );
};

export default TelaCadastro;
