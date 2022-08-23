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
    margin:auto;
}

/* Desktop */
  @media screen and (min-width:913px) {
    width: 400px ;
    height: 660px;
    overflow:hidden;
    overflow-y: auto;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  /* Phone */
    @media screen and (max-width:414px) {
      width: 80vw;
      max-width: 450px;
     
  }

  /* Tablet */
  @media screen and (min-width:415px) and (max-width:912px) {
    max-width: 370px;
    margin:auto;
}

/* Desktop */
  @media screen and (min-width:913px) {
    max-width: 370px;
}
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
  display: flex;
  flex-direction: column;
  margin-top: -46rem;
  margin-left: -25rem;
  @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
    margin-top: -43rem;
    margin-left: -16rem;
  }
`;

export const LogoImag = styled.img`
  width: 104px;
  height: 58px;
  margin: 90px 128px 16px;
  object-fit: contain;
  @media screen and (min-device-width: 200px) and (max-device-width: 667px) {
    margin: 30px 128px 16px;
    object-fit: contain;
  }
`;
