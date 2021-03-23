import styled from "styled-components";

const TextBlock = styled.article`
  padding: 0 20px;
  box-shadow: 0px 3px 7px 5px rgba(0, 0, 0, .07);
  height: 300px;
  
  h2 {
    color: ${props => props.theme.color.halfBakedDark50};
  }
  
  p {
    color: ${props => props.theme.color.halfBakedDark75};
    margin-bottom: 20px;
    display: block;
  white-space: wrap;
    text-overflow: ellipsis; 
  }
`;

export default TextBlock;
