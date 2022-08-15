import styled from "styled-components"

export const Container = styled.section`
    display: flex;
    flex-direction:column;
    width: auto;
    overflow:hidden;
    margin-top: 15%;
    margin-bottom: 15%;

    
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






