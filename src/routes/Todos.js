import React from 'react';
import { FlexContainer, Heading } from '../styles/Global.styled';
import AllBooks from '../components/AllBooks';

const Todos = () => {
  return (
    <FlexContainer direction="column" width="100%">
      <FlexContainer padding="1.5rem 2.5rem" bgColor boxShadow="bottom" width="100%">
        <Heading size="h1">Todos</Heading>
      </FlexContainer>
      <FlexContainer padding="2rem 2.5rem" height="100vh" overflowX>
        <AllBooks />
      </FlexContainer>
    </FlexContainer>
  )
}

export default Todos