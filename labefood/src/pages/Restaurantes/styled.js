import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction:column;
    width: auto;
    /* height: 630px; */
    overflow:hidden;
    margin-top: 15%;
    margin-bottom: 15%;
`;


export const ContainerInput = styled.div `
    display:flex;
    align-items:center;
    justify-content:center;
    /* margin-top: 40px; */
`;

export const ContainerRestaurantes = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-y: auto;

    cursor:pointer;

    /* ::-webkit-scrollbar {
        display: none;
} */
`;






