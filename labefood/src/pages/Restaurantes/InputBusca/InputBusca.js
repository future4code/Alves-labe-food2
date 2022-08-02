import React from 'react'
import * as C from "./styled"
import { goToBusca } from '../../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const InputBusca = () => {
    const navigate = useNavigate()
    return (
        <div>

            <C.ContainerInput>

            <TextField
                id="outlined-read-only-input"
                label="Busca"
                defaultValue="Restaurante"
                onClick={() => goToBusca(navigate)}
            />
          
            {/* <TextField id="filled-basic" label="Restaurante" variant="filled" onClick={() => goToBusca(navigate)} /> */}
            </C.ContainerInput>

        </div>
    )
}

export default InputBusca