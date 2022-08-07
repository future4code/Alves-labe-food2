import React, { useContext, useState } from 'react'
import GlobalContext from '../../../global/GlobalContext'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
import backButton from '../../../assets/back-button.png'
import { goBack } from '../../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import InputBusca from '../../../components/InputBusca/InputBusca'
import CardRestaurantes from "../../../components/cards/cardRestaurantes/CardRestaurantes"
import * as C from './styled'

const TelaBusca = (props) => {
    const [resultadoBusca, setResultadoBusca] = useState("")
    const { states, setters } = useContext(GlobalContext)
    const [results, setResults] = useState(false)
    const navigate = useNavigate()

    const onChangeBusca = (e) => {
        setResultadoBusca(e.target.value)
        // console.log(e.target.value)
    }

    const chooseRestaurants = states.restaurantes.filter(rest => {
            return rest.name.toLowerCase().includes(resultadoBusca.toLowerCase()) ||
                rest.category.toLowerCase().includes(resultadoBusca.toLowerCase())
        }).map((rest) => {
            return (
                <div key={rest.id} >
                    <CardRestaurantes restaurantes={rest} />
                </div>
            )
        })
    
    const chooseScreen = () => {
        if (resultadoBusca === '') {
            return <h4>Busque por nome do restaurante</h4>
        } else if (chooseRestaurants.length >= 1) {
            return <>{chooseRestaurants}</>
        } else {
            return <h4>Restaurante não encontrado</h4>
        }
    }
    
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

            <C.ContainerInput
                value={resultadoBusca}
                onChange={onChangeBusca}
                name={"busca"}
            >

                <InputBusca />

            </C.ContainerInput>

            {chooseScreen()}
            <Footer />
        </div>
    )
}

export default TelaBusca