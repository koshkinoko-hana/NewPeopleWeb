import styled from "styled-components";

const TextBlock = styled.article`
  font-weight: 200;
  margin-left: 30px;
  color: ${props => props.theme.color.halfBakedDark75};
  strong {
    font-weight: 500;
  }
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
  margin-left: 0;
  
`;

TextBlock.displayName = 'TextBlock';

export default TextBlock;
