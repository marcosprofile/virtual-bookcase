import React from 'react'

import { booksFinisheds } from '../utils/DataBooks';
import { FlexContainer } from '../styles/Global.styled';
import Book from './layouts/Book';

const Finished = () => {
  return (
    <FlexContainer flexWrap alignContent gap="3rem 1.5rem">
      {booksFinisheds.map((book) => (
        <FlexContainer key={book.id} height="auto">
          <Book data={book} />
        </FlexContainer>
      ))}
    </FlexContainer>
  )
}

export default Finished