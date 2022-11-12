import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../service/Service";
import "./ListaPostagem.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReduce";
import { toast } from "react-toastify";

function ListaPostagem() {
  let navigate = useNavigate();
  const [posts, setPosts] = useState<Postagem[]>([]);
  const token = useSelector<TokenState,TokenState["tokens"]>((state)=> state.tokens);

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
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
  }, [token]);

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);

  return (
    <>
      {posts.map((postagem) => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>
              <Typography variant="h5" component="h2">
                {postagem.titulo}
              </Typography>
              <Typography variant="body2" component="p">
                {postagem.texto}
              </Typography>
              <Typography variant="body2" component="p">
                {postagem.tema?.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/formularioPostagem/${postagem.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarPostagem/${postagem.id}`}
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaPostagem;
