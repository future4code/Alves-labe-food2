import styled from 'styled-components'

export const MainDiv = styled.div`
    position: fixed;
    bottom:0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    height: 49px;
    width: 100%;
    border-top: solid grey 1px;
    background-color: white;
    @media(min-width: 500px) {
    width: 500px;

  }

    button{
        border: 0;
        background-color: transparent;
        cursor:pointer;
    }
`