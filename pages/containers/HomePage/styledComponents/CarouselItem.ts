import styled from "styled-components";

const CarouselItem = styled.div`
  img::selection {
   background: transparent;
}
  p {
    visibility: hidden;
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: left;
      margin: 0;
      padding: 10px;
      padding-left: 30px;
      background-color: rgba(255,255,255, 0.5);
      font-weight: 200;
      color: ${props => props.theme.color.coniferDark50};
      font-size: 14pt;
      
      h3 {
        margin: 0;
      }
  }
  &:hover {
    p {
      visibility: visible;
    }
  }
`;

export default CarouselItem;