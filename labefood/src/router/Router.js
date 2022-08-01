import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TelaLogin from "../pages/Login/TelaLogin/TelaLogin";
import TelaCadastro from "../pages/Cadastro/TelaCadastro/TelaCadastro";
import TelaHome from "../pages/Home/TelaHome";
import TelaPerfil from "../pages/Perfil/TelaPerfil";
import TelaRestaurante from "../pages/Restaurantes/TelaRestaurantes";
import TelaDetalhe from "../pages/Restaurantes/TelaRestaurantes";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<TelaLogin/>} />
                <Route path="signup" element={<TelaCadastro />} />
                <Route path="home" element={<TelaHome />} />
                <Route path="perfil" element={<TelaPerfil/>} />
                <Route path="restaurantes" element={<TelaRestaurantes />} />
                <Route path="restaurantes/:id" element={<TelaDetalhe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router 
