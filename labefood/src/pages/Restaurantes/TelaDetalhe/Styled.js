import styled from "styled-components";

export const MainDiv = styled.div`

`
export const DetailsDiv = styled.div`
    padding-top: 61px;
    display: grid;
    justify-items: center;
    gap:16px;
`
export const InfoDiv = styled.div`
    display: grid;
    gap: 8px;
    width: 328px;

    img{
        width: 328px;
        height: 120px;
        border-top-left-radius:12px;
        border-top-right-radius:12px;
    }
    h5{
        color: #5cb646;
        font-size: 16px;
    }
    p{
        color: #b8b8b8;
        font-size: 16px;
    }
`
export const MainDishesDiv = styled.div`
    display: grid;
    gap: 8px;
    width: 328px;

    hr{
        height: 1px;
        width: 328px;
        background-color: #000000;
        border: 0;
    }
`
export const ShippingDiv = styled.div`
    display: flex;
    p{
        width: 104px;
    }
`