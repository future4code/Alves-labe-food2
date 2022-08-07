import styled from "styled-components";

export const ContainerBusca = styled.section `
    width: 100%;

    /* Phone */
@media screen and (max-width:414px) {
    width: 100%;
}

/* Tablet */
@media screen and (min-width:415px) and (max-width:912px) {
    max-width: 912px ;
    margin:auto;
}

/* Desktop */
@media screen and (min-width:913px) {
    width: 400px ;
    /* border: solid 1px #aaa; */
}

`;

export const ContainerInput = styled.div `
    display:flex;
    justify-content:center;
    margin-top: 15%;

`;

export const ContainerDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`