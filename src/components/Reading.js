import React from 'react'

import { booksReadings } from '../utils/DataBooks';
import { FlexContainer } from '../styles/Global.styled';
import Book from './layouts/Book';

const Reading = () => {
  return (
    <FlexContainer
      responsiveP="3rem 1rem 16rem 1rem"
      padding="2rem 2.5rem 6rem 2rem"
      height="100vh"
      gap="3rem 1.44rem"
      bottom="12rem"
      alignContent
      responsiveG
      responsiveJ
      overflowX
      flexWrap
      id="0"
    >
      {booksReadings.map((book) => (
        <FlexContainer key={book.id} height="auto">
          <Book data={book} />
        </FlexContainer>
      ))}
    </FlexContainer>
  )
}

export default Reading