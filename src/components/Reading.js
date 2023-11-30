import React from 'react'

import { booksReadings } from '../utils/DataBooks';
import { FlexContainer, Heading, Scroll } from '../styles/Global.styled';
import Book from './layouts/Book';

const Reading = () => {
  return (
    <FlexContainer flexWrap alignContent gap="3rem 1.34rem" height="max-content" bottom="4rem">
      {booksReadings.map((book) => (
        <FlexContainer key={book.id} height="auto">
          <Book data={book} />
        </FlexContainer>
      ))}
      
      <FlexContainer
        position="absolute"
        justify="center"
        width="-webkit-fill-available"
        p_bottom="40px"
      >
        <Scroll
          bgColor="black_light"
          padding=".5rem 1rem"
          radius="4rem"
          boxShadow="back"
          href="#0"
          pointer
        >
          <Heading fontWeight="semibold">Voltar ao topo</Heading>
        </Scroll>
      </FlexContainer>
    </FlexContainer>
  )
}

export default Reading