import React, { useContext, useState } from 'react'
import GlobalContext from '../../../global/GlobalContext'
import Footer from '../../../components/footer/Footer'
import Header from '../../../components/header/Header'
import backButton from '../../../assets/back-button.png'
import { goBack } from '../../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import InputBusca from '../../../components/InputBusca/InputBusca'
import CardRestaurantes from "../../../components/cardRestaurantes/CardRestaurantes"
import * as C from './styled'

const TelaBusca = (props) => {
    const [resultadoBusca, setResultadoBusca] = useState("")
    const { states, setters } = useContext(GlobalContext)
    const navigate = useNavigate()

    const onChangeBusca = (e) => {
        setResultadoBusca(e.target.value)
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

            {
                states.restaurantes.map((rest) => {
                    if (rest.name === resultadoBusca || rest.category === resultadoBusca) {
                        return (
                            <div key={rest.id}>
                                <CardRestaurantes restaurantes={rest} />
                            </div>
                        )
                    } else {

                    }
                })
            }
            <Footer />
        </div>
    )
}

export default TelaBusca