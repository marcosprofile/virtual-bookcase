import styled from 'styled-components';

export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};
  padding: ${({ padding }) => padding};
`;

export const FlexContainer = styled(PaddingContainer)`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  align-content: ${({ alignContent }) => alignContent ? "baseline" : ""};
  flex-wrap: ${({ flexWrap }) => flexWrap ? "wrap" : ""};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};
  z-index: ${({ zIndex }) => zIndex};
  box-sizing: border-box;
  overflow-y: ${({ overflowX }) => overflowX ? "auto" : ""};
  background: ${({ bgColor, theme }) => {
    switch(bgColor) {
      case 'black':
        return theme.colors.black;
      
      case 'primary':
        return theme.colors.primary;

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

      default:
        return;
    };
  }};
  border-bottom: ${({ borderBottom }) => borderBottom ? "1px solid #FFFFFF10" : ""};

  & > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
  };
`;

export const Heading = styled(PaddingContainer)`
  width: ${({ width }) => width};
  line-height: 156%;
  opacity: ${({ opacity }) => opacity};
  color: ${({ theme }) => theme.colors.white};
  text-align: ${({ align }) => align};
  text-overflow: ${({ textOverflow }) => textOverflow ? "ellipsis" : ""};
  white-space: ${({ whiteSpace }) => whiteSpace ? "nowrap" : ""};
  overflow: ${({ overflow }) => overflow ? "hidden" : ""};
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
`;

export const Imagem = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius};
  box-shadow: ${({ shadow }) => shadow ? "0px 0px 12px 4px rgba(0, 0, 0, 0.50)" : ""};
`;

export const Book = styled.img`
  box-shadow: ${({ theme }) => theme.shadows.book};
`;

export const Button = styled.a`
  display: inline-block;
  width: auto;
  padding: 1rem;
  font-weight: 500;
  text-decoration: none;
  background: ${({ selected }) => selected ? "#4368EF" : ""};
  color: ${({ theme }) => theme.colors.white};
  border-radius: .5rem;
  cursor: ${({ selected }) => selected ? "default" : "pointer"};
  transition: all .2s linear;

  &:hover {
    background: ${({ selected }) => selected ? "" : "#333333"};
  };
`;