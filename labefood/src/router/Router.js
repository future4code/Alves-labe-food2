import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import TelaLogin from "../pages/Login/TelaLogin/TelaLogin";
import TelaCadastro from "../pages/Cadastro/TelaCadastro/TelaCadastro";
import TelaPerfil from "../pages/Perfil/TelaPerfil";
import TelaEndereco from "../pages/Cadastro/TelaEndereco/TelaEndereco"
import TelaRestaurantes from "../pages/Restaurantes/TelaRestaurantes";
import TelaDetalhe from "../pages/Restaurantes/TelaDetalhe/TelaDetalhe";
import TelaBusca from "../pages/Restaurantes/Busca/TelaBusca";
import TelaCarrinho from "../pages/Carrinho/TelaCarrinho";
import EditarEndereco from "../pages/EditarEndereco/EditarEndereco";
import EditarPerfil from "../pages/EditarPerfil/EditarPerfil";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<TelaLogin/>} />
                <Route path="signup" element={<TelaCadastro />} />
                <Route path="endereco" element={<TelaEndereco />} />
                <Route path="perfil" element={<TelaPerfil/>} />
                <Route path="restaurantes" element={<TelaRestaurantes />} />
                <Route path="restaurantes/:id" element={<TelaDetalhe />} />
                <Route path="busca" element={<TelaBusca />} />
                <Route path="carrinho" element={<TelaCarrinho />} />
                <Route path="editarPerfil" element={<EditarPerfil />} />
                <Route path="editarEndereco" element={< EditarEndereco/>} />
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router 
