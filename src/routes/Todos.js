import React from 'react';
import { FlexContainer, Heading } from '../styles/Global.styled';

const Todos = () => {
  return (
    <FlexContainer direction="column" width="100%">
      <FlexContainer padding="1.5rem 2.5rem" bgColor boxShadow="bottom" width="100%">
        <Heading size="h1">Todos</Heading>
      </FlexContainer>
      <FlexContainer padding="2.5rem">
        <Heading size="h2" opacity=".4">Todos os meus livros</Heading>
      </FlexContainer>
    </FlexContainer>
  )
}

export default Todos