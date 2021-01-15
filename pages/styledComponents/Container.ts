import styled from "styled-components";

const Container = styled.div`
  padding: 30px 0;
  
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
    padding: 0;
  }
`;

export default Container;
