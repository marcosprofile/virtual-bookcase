import React from 'react'

import { booksUnreads } from '../utils/DataBooks';
import { FlexContainer, Heading, Scroll } from '../styles/Global.styled';
import Book from './layouts/Book';

import { FaAnglesUp } from 'react-icons/fa6';

const Unread = () => {
  return (
    <FlexContainer
      responsiveP="3rem 1rem 12rem 1rem"
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
      {booksUnreads.map((book) => (
        <FlexContainer key={book.id} height="auto">
          <Book data={book} />
        </FlexContainer>
      ))}

      <FlexContainer
        position="absolute"
        justify="center"
        width="-webkit-fill-available"
        p_bottom="2.5rem"
        right="5rem"
        responsiveD
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

export default Unread