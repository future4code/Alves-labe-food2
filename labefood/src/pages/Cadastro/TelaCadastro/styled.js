import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
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

`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 350px;
  align-items: center;
  margin-bottom: 20px;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 20px;
`;

export const ArrowBackContainer = styled.div`

  /* Phone */
  @media screen and (max-width:414px) {
    position: absolute;
    top: 8%;
    left: 8%;
  }

/* Tablet */
  @media screen and (min-width:415px) and (max-width:912px) {
   
}

/* Desktop */
  @media screen and (min-width:913px) {
    /* display: flex; */
    position: absolute;
    top: 10%;
    left: 32%;

}

`;

export const LogoImag = styled.img`
  width: 104px;
  height: 58px;
  margin: 90px 128px 16px;
  object-fit: contain;
`;
