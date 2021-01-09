import styled from "styled-components";

const CarouselArrow = styled.button<{next?: boolean}>`
  position: absolute;
  top: 0;
  width: 30px;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  z-index: 1;
  &:before {
    border-${props => props.next? 'left' : 'right'}: 8px solid rgba(94,110,27, 0.2);
    margin: 0 5px;
    display: inline-block;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    content: '';
  }
  &:hover {
    background: rgba(255,255,255, 0.5);
    &:before {
      border-${props => props.next? 'left' : 'right'}: 8px solid ${props => props.theme.color.coniferDark50};
    }
  }
`

export default CarouselArrow;