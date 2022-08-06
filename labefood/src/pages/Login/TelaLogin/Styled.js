import styled from "styled-components";

export const ScreenContainer= styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    align-items: center;

/* Phone */
  @media screen and (max-width:414px) {
    max-width: 414px;
    width:100%;
    height: 600px;
  }

/* Tablet */
  @media screen and (min-width:415px) and (max-width:912px) {
    max-width: 912px ;
    height: 100%;
    margin:auto;
}

/* Desktop */
  @media screen and (min-width:913px) {
    width: 400px ;
    min-height:650px;
}

`
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    /* margin: 5px; */


/* Phone */
@media screen and (max-width:414px) {
  width:80vw;
  }

/* Tablet */
  @media screen and (min-width:415px) and (max-width:912px) {
    width:80vw;
}

/* Desktop */
@media screen and (min-width:913px) {
    width: 360px ;
    /* min-height:650px; */
}

`
export const NewContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
`
export const ButtonNew = styled.button`
    background-color: white;
    border: none;
    cursor:pointer;

    &:hover {

    }
`
export const LoginButton = styled.button`
 background-color: #5CB646;
 border: none;
 height: 42px;
 cursor:pointer;
`
export const ImgLogin = styled.img`


`