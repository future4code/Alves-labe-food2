import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TelaLogin from "../pages/Login/TelaLogin/TelaLogin";
import TelaCadastro from "../pages/Cadastro/TelaCadastro/TelaCadastro";
import TelaHome from "../pages/Home/TelaHome";
import TelaPerfil from "../pages/Perfil/TelaPerfil";
import TelaRestaurante from "../pages/Restaurantes/TelaRestaurantes";
import TelaEndereco from "../pages/Cadastro/TelaEndereco/TelaEndereco"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<TelaLogin/>} />
                <Route path="signup" element={<TelaCadastro />} />
                <Route path="endereco" element={<TelaEndereco />} />
                <Route path="home" element={<TelaHome />} />
                <Route path="perfil" element={<TelaPerfil/>} />
                <Route path="restaurante/:id" element={<TelaRestaurante />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router 
