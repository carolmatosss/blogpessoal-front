import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componentes/estaticos/navbar/Navbar";
import Footer from "./componentes/estaticos/footer/Footer";
import Login from "./paginas/login/Login";
import Home from "./paginas/home/Home";
import CadastroUsuario from "./paginas/cadastroUsuario/CadastroUsuario";
import "./App.css";
import ListaTema from "./componentes/temas/listatema/ListaTema";
import ListaPostagem from "./componentes/postagens/listapostagem/ListaPostagem";
import CadastroPost from "./componentes/postagens/cadastrarPost/CadastrarPost";
import CadastroTema from "./componentes/temas/cadastroTema/CadastroTema";
import DeletarTema from "./componentes/temas/deletarTema/DeletarTema";
import DeletarPostagem from "./componentes/postagens/deletarPost/DeletarPost";
import store from "./store/Store";
import { Provider } from "react-redux";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
    <Router>
      <Navbar />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/postagens" element={<ListaPostagem />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
    </Provider>
  );
}

export default App;
