import styled from 'styled-components'

export const MainDiv = styled.div`
    position: fixed;
    bottom:0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    border-top: solid grey 1px;
    background-color: white;
    width: 100vw;

    /* box-shadow: 0 10px 30px black inset,0 -10px red inset, -10px 0 blue inset, 10px 0 green inset; */
    /* overflow:hidden; */
    
    /* Phone */
    @media screen and (min-width:415px) and (max-width:912px) {
        width: 100vw;
        
    }
    @media(min-width:913px){
        width: 400px;
    }
      
    button{
        border: 0;
        background-color: transparent;
        cursor:pointer;
    }
`