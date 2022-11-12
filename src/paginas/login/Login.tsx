import React, { useState, useEffect, ChangeEvent } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Box, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../service/Service";
import UserLogin from "../../models/UserLogin";
import "./Login.css";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/Action";
import { toast } from "react-toastify";

function Login() {
  //Usestate- Para manipulação dos valores de estado de um componente

  let history = useNavigate();
  const dispatch = useDispatch();
  const [token, setToken] = useState('')
  const [userLogin, setUserLogin] = useState<UserLogin>(
    //userLogin- Acessar valor no state; setUserLogin-Alterar valor no state

    {
      //Valores iniciais do state
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    }
  );
  //UpdateModel- Atualização da model (em conjunto com o state)
  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await login(`/usuarios/logar`, userLogin, setToken);

      toast.success("Usuário cadastrado com sucesso", {
        position:"top-right",
        autoClose:3000,
        hideProgressBar: false,
        closeOnClick:true,
        pauseOnHover:false,
        draggable:false,
        theme:"colored",
        progress: undefined,
  
      });
    } catch (error) {
      toast.error("Dados errados", {
        position:"top-right",
        autoClose:3000,
        hideProgressBar: false,
        closeOnClick:true,
        pauseOnHover:false,
        draggable:false,
        theme:"colored",
        progress: undefined,
  
      });
    }
  }

  useEffect(() => {
    if (token !== "") {
      dispatch(addToken(token));
      history("/home");
    }
  }, [token]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center" className="fundo" >
      <Grid alignItems="center" xs={6} >
        <Box paddingX={20}  >
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              className="textos"
            >
              LOGIN
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="Usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              color="success"            fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="senha"
              color="success"
              
              name="senha"
              margin="normal"
              type="password"
              className="caixa"
              fullWidth 
             
            />
            <Box marginTop={2} alignItems="center">
              <Button type="submit" variant="contained" className="btn">
                ENTRAR
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos"
              >
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastrousuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos1"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem"></Grid>
    </Grid>
  );
}

export default Login;
