import React from 'react'
import styled from 'styled-components'

const InfoCelular = () => {

    const Container = styled.div `
        position: fixed;
        top:0; 
        display:flex;
        flex-direction: row;
        padding-top: 13px;
        align-items: center;
        height: 20px;
        background-color: white;
        justify-content: space-between;

        p{
            font-size: 15px;
            color: #aaa;
        }


        /* Phone */
    @media screen and (max-width:414px) {
    width: 100% ;
}
    /* Tablet */
    @media screen and (min-width:280px) and (max-width:912px) {
    width: 100% ;
}
    /* Desktop */
    @media screen and (min-width:913px) {
    width: 400px;
}
    `

    const Icons = styled.div `
    display:flex;
    align-items:center;
    padding-left: 10px;
    padding-right: 10px;
    color: #aaa;

    ion-icon {
    font-size: 15px;
    --ionicon-stroke-width: 40px;
    padding:5px;
}
    
    `

    return (
        <Container>
            <Icons>
                <ion-icon name="globe-outline"></ion-icon> 
                 Sketch
                <ion-icon name="wifi-outline"></ion-icon>
            </Icons>

            
                <p>9:41 AM</p>
           

            <Icons>
                <ion-icon name="bluetooth-outline"></ion-icon> 100%
                <ion-icon name="bluetooth-outline"></ion-icon>
            </Icons>

        </Container>
    )
}

export default InfoCelular