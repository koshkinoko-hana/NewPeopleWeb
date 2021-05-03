import styled from 'styled-components'

const HeaderContainer = styled.nav`
  background: ${props => props.theme.color.white};
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: flex-end;
  max-width: ${props => props.theme.width.laptop};
  z-index: 1000;
  box-shadow: 0px 3px 7px 5px rgba(0, 0, 0, .07);
`;

HeaderContainer.displayName = 'HeaderContainer';

export default HeaderContainer;
