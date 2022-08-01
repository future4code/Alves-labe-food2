import  GlobalContext  from "./GlobalStateContext";
import axios from "axios";
import { useState, useEffect } from "react";

export default function GlobalState(props) {
    const [restaurantes, setRestaurantes] = useState([])
  
  
useEffect(() => {
      axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`, {
        headers: {
            auth: ''
        }
      })
        .then((res) => {
            setRestaurantes(res.data.results)
            console.log(res.data.results)
        }).catch((err) => {
          console.log(err.response)
        })
    }, [])

    const states = { restaurantes}
    const setters = { setRestaurantes }

return (
    <GlobalContext.Provider value={{ states, setters }}>
        {props.children}
    </GlobalContext.Provider>
)}