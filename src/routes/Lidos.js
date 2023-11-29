import React from 'react'
import { FlexContainer, Heading } from '../styles/Global.styled'
import Finished from '../components/Finished'

const Lidos = () => {
  return (
    <FlexContainer direction="column" width="100%">
      <FlexContainer padding="1.5rem 2.5rem" bgColor boxShadow="bottom" width="100%">
        <Heading size="h1">Lidos</Heading>
      </FlexContainer>
      <FlexContainer padding="2rem 2.5rem" height="100vh" overflowX>
        <Finished />
      </FlexContainer>
    </FlexContainer>
  )
}

export default Lidos