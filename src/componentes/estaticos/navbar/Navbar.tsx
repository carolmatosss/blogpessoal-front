import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { addToken } from "../../../store/tokens/Action";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReduce";
import {toast} from 'react-toastify'

function Navbar() {
  const token = useSelector<TokenState,TokenState["tokens"]>((state)=> state.tokens);
 const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout() {
dispatch(addToken(''));
    toast.info("Usuário deslogado", {
      position:"top-right",
      autoClose:3000,
      hideProgressBar: false,
      closeOnClick:true,
      pauseOnHover:false,
      draggable:false,
      theme:"colored",
      progress: undefined,

    });
    navigate("/login");
  }

  var navbarComponent;

  if (token !== ""){
    navbarComponent =
    <AppBar position="static" >
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              Blog Carolyne
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  Home
                </Typography>
              </Box>
            </Link>
            <Link to='/postagens' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Postagens
              </Typography>
            </Box>
            </Link>
            <Link to='/temas' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Temas
              </Typography>
            </Box>
            </Link>
            <Link to='/formularioTema' className="text-decorator-none">
            <Box mx={1} className="cursor">
              <Typography variant="h6" color="inherit">
                Cadastrar Tema
              </Typography>
            </Box>
            </Link>

            
              <Box mx={1} className="cursor" onClick={goLogout}>
                <Typography variant="h6" color="inherit">
                  Sair
                </Typography>
              </Box>
            
          </Box>
        </Toolbar>
      </AppBar>

  }
  return (
    <>
     {navbarComponent} 
      </>
  );
}
export default Navbar;
