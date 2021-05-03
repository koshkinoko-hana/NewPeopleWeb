import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  width: 70%;
  color: ${props => props.theme.color.halfBakedDark75};
  
  
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
    width: fit-content;
  }
`

export default MainContainer;
