import styled from "styled-components"

export const MainDiv = styled.div`
    position: fixed;
    top:0; 
    background-color: white;
    display: flex;
    align-items: center;

    width: 100%;
    height: 44px;
    border-top: none;
    border-bottom: solid gray 1px;
    @media(min-width: 500px) {
        width: 400px;

    }
`;
export const BackButtonDiv = styled.div`
    margin-left: 14px;
    cursor:pointer;
`;
export const NameDiv = styled.div`
    position: relative;
    transform: translate(-50%, -50%);
    left: 40%;
    top: 25%;
    text-align: center;
    display: flex;
    justify-content: center;
`;

