import React,  { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../../global/GlobalContext'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
import backButton from '../../../assets/back-button.png'
import { goBack } from '../../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import InputBusca from '../InputBusca/InputBusca'

const TelaBusca = () => {
    const { states, setters } = useContext(GlobalContext)
    const [restaurantes, setRestaurantes] = useState([])
    const navigate = useNavigate()
    return (
        <div>
            <Header
                backButton={
                    <img
                        src={backButton}
                        onClick={() => goBack(navigate)}
                    />
                }
                name="Busca"
            />

                <InputBusca />




            <Footer />
        </div>
    )
}

export default TelaBusca