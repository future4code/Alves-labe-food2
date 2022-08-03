import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction:column;
    width: 360px;
    height: 620px;
    overflow:hidden;
`;


export const ContainerInput = styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const ContainerRestaurantes = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    &:hover{
        overflow-y: auto;
    }
`;






