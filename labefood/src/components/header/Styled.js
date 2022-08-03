import styled from "styled-components"

export const MainDiv = styled.div`
    position: fixed;
    top:0;
    background-color: white;
    display: flex;
    align-items: center;

    width: 360px;
    height: 44px;
    border-top: none;
    border-bottom: solid gray 1px;
    @media(min-width: 415px) {
        transform: translate(-50%, -50%);
        left:50%;
        top:20px;
    }
`;
export const BackButtonDiv = styled.div`
    margin-left: 14px;
    cursor:pointer;
`;
export const NameDiv = styled.div`
    position: fixed;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 22px;
`;

