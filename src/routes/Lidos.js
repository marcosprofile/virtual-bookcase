import React from 'react'
import { FlexContainer, Heading, Imagem, Scroll } from '../styles/Global.styled'
import Finished from '../components/Finished'
import { booksFinisheds } from '../utils/DataBooks'


const Lidos = () => {
  const count = booksFinisheds.length;

  return (
    <FlexContainer direction="column" width="100%">
      <FlexContainer
        justify="space-between"
        padding="1.5rem 2.5rem"
        boxShadow="bottom"
        width="100%"
        bgColor
      >
        <FlexContainer align="center" gap="1rem">
          <Heading size="h1">Lidos</Heading>
          <FlexContainer bgColor="primary" radius="2rem" width="2.5rem" height="2.5rem" align="center" justify="center">
            <Heading fontWeight="semibold">{count}</Heading>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer gap="2.5rem">
          <FlexContainer align="center" gap=".5rem">
            <Imagem width="24px" height="24px" src="./nao_lido.png" />
            <Heading size="h2">Não lido</Heading>
          </FlexContainer>
          <FlexContainer align="center" gap=".5rem">
            <Imagem width="24px" height="24px" src="./lendo.png" />
            <Heading size="h2">Lendo</Heading>
          </FlexContainer>
          <FlexContainer align="center" gap=".5rem">
            <Imagem width="24px" height="24px" src="./lido.png" />
            <Heading size="h2">Lido</Heading>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
      <FlexContainer padding="2rem 2.5rem" height="100vh" overflowX>
        <Finished />
      </FlexContainer>
    </FlexContainer>
  )
}

export default Lidos