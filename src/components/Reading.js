import React from 'react'

import { booksReadings } from '../utils/DataBooks';
import { FlexContainer } from '../styles/Global.styled';
import Book from './layouts/Book';

const Reading = () => {
  return (
    <FlexContainer flexWrap alignContent gap="3rem 1.5rem">
      {booksReadings.map((book) => (
        <FlexContainer key={book.id} height="auto">
          <Book data={book} />
        </FlexContainer>
      ))}
    </FlexContainer>
  )
}

export default Reading