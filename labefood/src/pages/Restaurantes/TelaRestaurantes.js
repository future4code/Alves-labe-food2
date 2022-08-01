import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../global/GlobalContext';
// import axios from 'axios';
// import { BASE_URL } from '../../constants/url';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const TelaRestaurantes = () => {

  const { states, setters } = useContext(GlobalContext)
  const [restaurantes, setRestaurantes] = useState([])

  // console.log(states.restaurantes)

  return (
    <div>
      {
        states.restaurantes.map((element) => {
          return (
            <div>
              {console.log(element)}
            </div>
          )
        })
      }
    </div>
  )

}

export default TelaRestaurantes