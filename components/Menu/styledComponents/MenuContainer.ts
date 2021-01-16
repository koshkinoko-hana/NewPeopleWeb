import styled from "styled-components";

interface Props {
  active?: boolean;
  slideLeft?: boolean;
}

const MenuContainer = styled.div<Props>`
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 60px 30px 0 30px;
  background: rgba(255, 255, 255, 0.85);
  transition: all .2s;
  z-index: 999;
  display: flex;
  flex-direction: column;
  overflow: auto;
  right: ${props => props.active ? 0 : '-100%'};
  top: 0;
  bottom: 0;
  
  @media screen and (min-width: ${props => props.theme.width.mobileM}) {
    width: 250px;
  }
`;

MenuContainer.displayName = 'MenuContainer';

export default MenuContainer
