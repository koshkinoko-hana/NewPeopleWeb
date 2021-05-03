import styled from "styled-components";

const TextBlock = styled.article`
  padding: 0 20px;
  
  h2 {
    color: ${props => props.theme.color.halfBakedDark50};
  }
  
  p {
    color: ${props => props.theme.color.halfBakedDark75};
    margin-bottom: 20px;
    display: block;
  }
`;

export default TextBlock;
