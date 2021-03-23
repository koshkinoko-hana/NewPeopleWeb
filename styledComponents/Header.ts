import styled from "styled-components";

export interface Props {
  color: string;
}

const Header = styled.h1<Props>`
  color: ${props => props.theme.color[props.color]};
  font-size: 28pt;
`;

Header.displayName = 'Header';

export default Header;
