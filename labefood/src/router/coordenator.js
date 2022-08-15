export const goToLogin = (navigate) => {
    navigate('/')
}

export const goToPerfil = (navigate) => {
    navigate('/perfil')
}

export const goToRestaurants = (navigate) => {
    navigate("/restaurantes")
}


export const goToSignUp = (navigate) => {
    navigate('/signup')
}

export const goToShopCart = (navigate) => {
    navigate('/carrinho')
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToAddress = (navigate) => {
    navigate('/endereco')
}

export const goToBusca = (navigate) => {
    navigate('/busca')
}

export const goToDetail = (navigate, id) => {
    navigate(`/restaurantes/${id}`)
}
export const goToEditPerfil = (navigate) => {
    navigate(`/editarPerfil`)
}

export const goToEditEndereco = (navigate) => {
    navigate(`/editarEndereco`)
}