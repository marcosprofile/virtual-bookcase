import React from 'react';

import {
  FlexContainer,
  Heading,
  Imagem
} from '../../styles/Global.styled';

const Book = ({ data }) => {
  return (
    <FlexContainer direction="column">
      <Heading
        padding=".5rem"
        align="center" size="p"
        fontWeight="semibold"
      >
        { data.book_pages }
      </Heading>

      <Imagem
        width="168px"
        height="248px"
        radius=".5rem"
        src={ data.book_img}
        alt={ data.book_name }
        draggable="false"
        shadow
      />

      <FlexContainer
        width="168px"
        direction="column" 
        align="center"
        padding=".5rem 0"
      >
        <Heading
          title={ data.book_name }
          width="100%"
          size="p"
          fontWeight="semibold"
          textOverflow
          whiteSpace
          overflow
        >
          { data.book_name }
        </Heading>
        <Heading
          title={ data.book_autor }
          width="100%"
          size="span"
          fontWeight="semibold"
          opacity=".4"
          textOverflow
          whiteSpace
          overflow
        >
          { data.book_autor }
        </Heading>
      </FlexContainer>
    </FlexContainer>
  )
}

export default Book