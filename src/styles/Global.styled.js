import styled from 'styled-components';

export const PaddingContainer = styled.div`
  padding-bottom: ${({ bottom }) => bottom};
  padding-right: ${({ right }) => right};
  padding: ${({ padding }) => padding};
  padding-left: ${({ left }) => left};
  padding-top: ${({ top }) => top};

  @media (max-width: 920px) {
    padding: ${({ responsiveP }) => responsiveP};
  }
`;

export const FlexContainer = styled(PaddingContainer)`
  display: flex;
  align-content: ${({ alignContent }) => alignContent ? "baseline" : ""};
  overflow-y: ${({ overflowX }) => overflowX ? "auto" : ""};
  flex-wrap: ${({ flexWrap }) => flexWrap ? "wrap" : ""};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  border-radius: ${({ radius }) => radius};
  position: ${({ position }) => position};
  bottom: ${({ p_bottom }) => p_bottom};
  align-items: ${({ align }) => align};
  display: ${({ display }) => display};
  z-index: ${({ zIndex }) => zIndex};
  right: ${({ p_right }) => p_right};
  height: ${({ height }) => height};
  left: ${({ p_left }) => p_left};
  width: ${({ width }) => width};
  top: ${({ p_top }) => p_top};
  gap: ${({ gap }) => gap};
  box-sizing: border-box;
  background: ${({ bgColor, theme }) => {
    switch(bgColor) {
      case 'black':
        return theme.colors.black;
      
      case 'primary':
        return theme.colors.primary;

      case 'black_light':
        return theme.colors.black_light;

      default:
        return;
    }
  }};
  box-shadow: ${({ boxShadow, theme }) => {
    switch(boxShadow) {
      case 'right':
        return theme.shadows.right;

      case 'bottom':
        return theme.shadows.bottom;

      case 'back':
        return theme.shadows.back;

      default:
        return;
    };
  }};
  border-bottom: ${({ borderBottom }) => borderBottom ? "1px solid #FFFFFF10" : ""};

  & > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
  };

  /* Scroll */
  scroll-behavior: smooth;
  scroll-margin-top: 50px;

  ::-webkit-scrollbar {
    width: 14px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #3D3D3D;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #121214;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #333333;
  }

  @media (max-width: 920px) {
    display: ${({ responsiveD }) => responsiveD ? 'none' : 'flex'};
    flex-direction: ${({ responsiveC }) => {
      switch(responsiveC) {
        case 'column':
          return 'column';

        case 'row':
          return 'row';

        default:
          return;
      };
    }};
    width: ${({ responsiveW }) => responsiveW ? 'auto' : ''};
    width: ${({ imageWResponsive }) => imageWResponsive ? '132px !important' : ''};
    height: ${({ responsiveH }) => responsiveH ? '100vh' : ''};
    justify-content: ${({ responsiveJ }) => responsiveJ ? 'center' : ''};
    gap: ${({ responsiveG }) => responsiveG ? '2rem 2rem' : ''};
    box-shadow: ${({ boxShadow, theme }) => {
      switch(boxShadow) {
        case 'right':
          return 'none';

        case 'bottom':
          return "0px 20px 24px 0px rgba(0, 0, 0, 0.40)";

        case 'back':
          return theme.shadows.back;

        default:
          return;
      };
    }};
}
`;

export const Heading = styled(PaddingContainer)`
  text-overflow: ${({ textOverflow }) => textOverflow ? "ellipsis" : ""};
  white-space: ${({ whiteSpace }) => whiteSpace ? "nowrap" : ""};
  overflow: ${({ overflow }) => overflow ? "hidden" : ""};
  color: ${({ theme }) => theme.colors.white};
  opacity: ${({ opacity }) => opacity};
  text-align: ${({ align }) => align};
  width: ${({ width }) => width};
  line-height: 156%;
  font-weight: ${({ fontWeight, theme }) => {
    switch(fontWeight) {
      case 'regular':
        return theme.fonts.weight.regular;

      case 'semibold':
        return theme.fonts.weight.semibold;

      default:
        return;
    };
  }};
  font-size: ${({ size }) => {
    switch(size) {
      case 'h1':
        return '1.5rem';
      
      case 'h2':
        return '1.25rem';

      case 'p':
        return '1rem';

      case 'span':
        return '.875rem';

      default:
        return;
    };
  }};

  @media (max-width: 920px) {
    font-size: ${({ size }) => {
    switch(size) {
      case 'h1':
        return '1.25rem';
      
      case 'h2':
        return '1rem';

      case 'p':
        return '.875rem';

      default:
        return;
    };
  }};
  }
`;

export const Imagem = styled.img`
  box-shadow: ${({ shadow }) => shadow ? "0px 0px 12px 4px rgba(0, 0, 0, 0.50)" : ""};
  border-radius: ${({ radius }) => radius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};

  @media (max-width: 920px) {
    width: ${({ imageWResponsive }) => imageWResponsive ? '132px !important' : ''};
    height: ${({ imageHResponsive }) => imageHResponsive ? '212px !important' : ''};
  }
`;

export const Book = styled.img`
  box-shadow: ${({ theme }) => theme.shadows.book};

  @media (max-width: 920px) {
    width: ${({ responsiveW }) => responsiveW};
    height: ${({ responsiveH }) => responsiveH};
  }
`;

export const Button = styled.a`
  display: inline-block;
  cursor: ${({ selected }) => selected ? "default" : "pointer"};
  background: ${({ selected }) => selected ? "#4368EF" : ""};
  color: ${({ theme }) => theme.colors.white};
  transition: all .2s linear;
  text-decoration: none;
  border-radius: .5rem;
  font-weight: 500;
  padding: 1rem;
  width: auto;

  &:hover {
    background: ${({ selected }) => selected ? "" : "#333333"};
  };

  @media (max-width: 920px) {
    width: 100%;
    text-align: center;
    font-size: 14px;
    white-space: nowrap;
  }
`;

export const Scroll = styled(FlexContainer).attrs({ as: 'a'})`
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  text-decoration: none;
  transition: all .2s ease;
  
  &:hover {
    transform: scale(.95);
  }
`