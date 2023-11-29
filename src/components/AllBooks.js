import React from 'react'

import { booksDetails } from '../utils/DataBooks';
import { FlexContainer } from '../styles/Global.styled';
import Book from './layouts/Book';

const AllBooks = () => {

  return (
    <FlexContainer flexWrap alignContent gap="3rem 1.34rem" height="max-content" bottom="4rem">
      {booksDetails.map((book) => (
        <FlexContainer key={book.id} height="auto">
          <Book data={book} />
        </FlexContainer>
      ))}
    </FlexContainer>
  )
}

export default AllBooks