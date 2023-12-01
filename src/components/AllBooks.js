import React from 'react'

import { booksDetails } from '../utils/DataBooks';
import { FlexContainer, Heading, Scroll } from '../styles/Global.styled';
import Book from './layouts/Book';

import { FaAnglesUp } from "react-icons/fa6";

const AllBooks = () => {

  return (
    <FlexContainer flexWrap alignContent gap="3rem 1.34rem" height="max-content" bottom="4rem">
      {booksDetails.map((book) => (
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
          boxShadow="back"
          align="center"
          radius="4rem"
          gap=".5rem"
          href="#0"
          pointer
        >
          <FaAnglesUp />
          <Heading fontWeight="semibold">Voltar ao topo</Heading>
        </Scroll>
      </FlexContainer>
    </FlexContainer>
  )
}

export default AllBooks