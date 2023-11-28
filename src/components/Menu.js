import {
  FlexContainer,
  Imagem,
  PaddingContainer,
  Heading,
  Button
} from "../styles/Global.styled";

const Menu = () => {
  return (
    <FlexContainer
      direction="column"
      width="328px"
      height="100vh"
      bgColor
      shadowRight
      >
      <PaddingContainer
        top="32px"
        bottom="32px"
        left="24px"
        right="24px"
      >
        <FlexContainer
          gap="12px"
          bottom="1.5rem"
          align="center"
          borderBottom
        >
          <Imagem
            src="user_image.png"
            width="3rem"
            height="3rem"
            radius="100%"
          ></Imagem>
          <FlexContainer
            direction="column"
            align="left"
          >
            <Heading size="h2">Marcos L. Ferreira</Heading>
            <Heading size="span" opacity="40%">marcos.ferreira</Heading>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer
          direction="column"
          gap=".75rem"
          top="1.5rem"
        >
          <Button href="/todos" selected>Todos</Button>
          <Button href="/lendo">Lendo</Button>
          <Button href="/lidos">Lidos</Button>
          <Button href="/naolidos">Não lidos</Button>
        </FlexContainer>
      </PaddingContainer>
    </FlexContainer>
  )
}

export default Menu;