import React, {useState } from 'react'
import * as C from "./styled"
import { useNavigate } from 'react-router-dom'
import Lupa from '../../assets/search.svg'

const InputBusca = (props) => {
    const [resultadoBusca, setResultadoBusca] = useState("")
    const navigate = useNavigate()

    return (
        <div>

            <C.ContainerInput>
            <img src={Lupa} alt={'search'}/>
            <C.Input placeholder='Restaurante' />
            </C.ContainerInput>

        </div>
    )
}

export default InputBusca