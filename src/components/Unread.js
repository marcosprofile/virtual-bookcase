import React from 'react'

import { booksUnreads } from '../utils/DataBooks';
import { FlexContainer } from '../styles/Global.styled';
import Book from './layouts/Book';

const Unread = () => {
  return (
    <FlexContainer flexWrap alignContent gap="3rem 1.5rem">
      {booksUnreads.map((book) => (
        <FlexContainer key={book.id} height="auto">
          <Book data={book} />
        </FlexContainer>
      ))}
    </FlexContainer>
  )
}

export default Unread