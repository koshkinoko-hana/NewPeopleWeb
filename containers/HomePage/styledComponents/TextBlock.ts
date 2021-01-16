import styled from "styled-components";

const TextBlock = styled.article`
  font-weight: 200;
  margin-right: 30px;
  color: ${props => props.theme.color.halfBakedDark75};
  strong {
    font-weight: 500;
  }
`;

TextBlock.displayName = 'TextBlock';

export default TextBlock;
