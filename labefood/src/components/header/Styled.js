import styled from "styled-components"

export const MainDiv = styled.div`
    position: fixed;
    top:30px; 
    z-index: 99;  
    background-color: white;
    display: flex;
    align-items: center;
    height: 64px;
    border-top: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);

    /* Phone */
    @media screen and (max-width:414px) {
    width: 100% ;
}
    /* Tablet */
    @media screen and (min-width:280px) and (max-width:912px) {
    width: 100% 
}
    /* Desktop */
    @media screen and (min-width:913px) {
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

