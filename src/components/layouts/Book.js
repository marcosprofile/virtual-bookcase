import React from 'react';

import {
  FlexContainer,
  Heading,
  Imagem
} from '../../styles/Global.styled';

const Book = ({ data }) => {
  return (
    <FlexContainer direction="column" id={ data.id }>
      <FlexContainer justify="center">
        <Imagem
          width="24px"
          height="24px"
          src={ data.book_status }
          draggable="false"
        />
      </FlexContainer>
      <Heading
        padding=".5rem"
        align="center" size="p"
        fontWeight="semibold"
      >
        { data.book_pages }
      </Heading>

      <Imagem
        imageWResponsive
        imageHResponsive
        width="168px"
        height="248px"
        radius=".5rem"
        src={ data.book_img}
        alt={ data.book_name }
        draggable="false"
        shadow
      />

      <FlexContainer
        imageWResponsive
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
          fontWeight="regular"
          opacity=".5"
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