import React from 'react'

import { booksReadings } from '../utils/DataBooks';
import { FlexContainer } from '../styles/Global.styled';
import Book from './layouts/Book';

const Reading = () => {
  return (
    <FlexContainer responsiveJ flexWrap alignContent gap="3rem 1.34rem" height="max-content" bottom="4rem">
      {booksReadings.map((book) => (
        <FlexContainer key={book.id} height="auto">
          <Book data={book} />
        </FlexContainer>
      ))}
    </FlexContainer>
  )
}

export default Reading