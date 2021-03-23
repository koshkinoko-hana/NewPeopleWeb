import styled from "styled-components";

const TextBlock = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  
  @media screen and (max-width: ${props => props.theme.width.mobileBigger}) {
    padding: 0;
    margin-top: 0;
  }
`;

export default TextBlock;
