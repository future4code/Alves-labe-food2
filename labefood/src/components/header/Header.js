import React from 'react'
import { BackButtonDiv, MainDiv, NameDiv } from './Styled'

export default function Header(props) {
    return (
        <MainDiv>
            <BackButtonDiv>
                {props.backButton}
            </BackButtonDiv>
            <NameDiv>
                {props.name}
            </NameDiv>
        </MainDiv>
    )
}
