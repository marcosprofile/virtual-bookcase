import React from 'react'
import { FlexContainer, Heading } from '../styles/Global.styled'

const Lendo = () => {
  return (
    <FlexContainer direction="column" width="100%">
      <FlexContainer padding="1.5rem 2.5rem" bgColor boxShadow="bottom" width="100%">
        <Heading size="h1">Lendo</Heading>
      </FlexContainer>
      <FlexContainer padding="2.5rem">
        <Heading size="h2" opacity=".4">Livros que estou lendo</Heading>
      </FlexContainer>
    </FlexContainer>
  )
}

export default Lendo