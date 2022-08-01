import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TelaLogin from "../pages/Login/TelaLogin/TelaLogin";
import TelaCadastro from "../pages/Cadastro/TelaCadastro/TelaCadastro";
import TelaHome from "../pages/Home/TelaHome";
import TelaPerfil from "../pages/Perfil/TelaPerfil";
import TelaRestaurante from "../pages/Restaurantes/TelaRestaurantes";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<TelaHome />} />
                <Route path="sigup" element={<TelaCadastro />} />
                <Route path="login" element={<TelaLogin />} />
                <Route path="perfil" element={<TelaPerfil/>} />
                <Route path="restaurante/:id" element={<TelaRestaurante />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router 
