import styled from 'styled-components'

const MainContainer = styled.main`
  width: 100%;
  background-color: ${props => props.theme.color.white};
  padding: 20px 10px 0;
  
  margin-bottom: 30px;
  
  box-shadow: 0px 3px 7px 5px rgba(0, 0, 0, .07);
  
  @media screen and (min-width: ${props => props.theme.width.laptop}) {
    width: 1024px;
  }
  
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
    padding: 0 0;
  }
`;

MainContainer.displayName = 'MainContainer';

export default MainContainer
