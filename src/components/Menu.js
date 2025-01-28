import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
  FlexContainer,
  Imagem,
  PaddingContainer,
  Heading,
  Button
} from "../styles/Global.styled";

const Menu = () => {
  const [selectedButton, setSelectedButton] = useState('todos');
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setSelectedButton('todos');
        break;
      case '/lendo':
        setSelectedButton('lendo');
        break;
      case '/lidos':
        setSelectedButton('lidos');
        break;
      case '/nao_lidos':
        setSelectedButton('naolidos');
        break;
      default:
        setSelectedButton('todos');
    }
  }, [location.pathname]);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const nome = "Marcos L. Ferreira"

  return (
    <FlexContainer
      direction="column"
      width="328px"
      height="100vh"
      bgColor
      responsiveW
      boxShadow="right"
      zIndex="1"
      >
      <PaddingContainer
        top="32px"
        bottom="32px"
        left="24px"
        right="24px"
        responsiveP="1rem"
      >
        <FlexContainer
          gap="12px"
          bottom="1.5rem"
          align="center"
          borderBottom
          responsiveD
        >
          <Imagem
            src="user_image.png"
            width="3rem"
            height="3rem"
            radius="100%"
          />
          <FlexContainer
            direction="column"
            align="start"
            width="220px"
          >
            <Heading
              width="100%"
              size="h2"
              fontWeight="semibold"
              textOverflow={true}
              whiteSpace
              overflow
              title={nome}
            >
              {nome}
            </Heading>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer
          direction="column"
          gap=".75rem"
          top="1.5rem"
          responsiveP="0"
          responsiveC="row"
        >
          <Button href="/" selected={selectedButton === 'todos'} onClick={() => handleButtonClick('todos')}>
            Todos
          </Button>
          <Button href="/lendo" selected={selectedButton === 'lendo'} onClick={() => handleButtonClick('lendo')}>
            Lendo
          </Button>
          <Button href="/lidos" selected={selectedButton === 'lidos'} onClick={() => handleButtonClick('lidos')}>
            Lidos
          </Button>
          <Button href="/nao_lidos" selected={selectedButton === 'naolidos'} onClick={() => handleButtonClick('naolidos')}>
            Não lidos
          </Button>
        </FlexContainer>
      </PaddingContainer>
    </FlexContainer>
  )
}

export default Menu;