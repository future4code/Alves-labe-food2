import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #5cb646;
    width: 100%;
    height: 118px;
    bottom: 60px;
    @media screen and (min-width:415px) and (max-width:912px) {
        width: 100%;
        
    }
    @media(min-width:913px){
        width: 400px;
    }
`
export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap:10px;
    width: 256px;

    h4{
        color: white;
    }
`