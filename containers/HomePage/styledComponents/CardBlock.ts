import styled from "styled-components";
import InfoCard from "./InfoCard";

const CardBlock = styled.div`
  
  @media screen and (min-width: ${props => props.theme.width.mobileL}) {
    width: calc(50% - 20px);
  }
  
  @media screen and (min-width: ${props => props.theme.width.laptop}) {
    width: calc(25% - 20px);
  }
  ${InfoCard} {
    width: 100%;
  }
`;

CardBlock.displayName = 'CardBlock';

export default CardBlock;
