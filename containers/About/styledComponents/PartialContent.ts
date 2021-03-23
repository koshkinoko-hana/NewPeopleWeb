import styled from "styled-components";

const PartialContent = styled.div`
  display: flex;
  align-content: stretch;
  @media screen and (max-width: ${props => props.theme.width.mobileBigger}) {
    flex-direction: column;
  }
`

export default PartialContent;
