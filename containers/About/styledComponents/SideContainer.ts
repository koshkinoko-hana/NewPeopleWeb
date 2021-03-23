import styled from "styled-components";

const SideContainer = styled.div`
  display: flex;
  width: 30%;
  
  
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
    min-width: 200px;
  }
  @media screen and (max-width: ${props => props.theme.width.mobileBigger}) {
    width: auto;
  }
`;

export default SideContainer;
