import styled from "styled-components";

export interface Props {
  color?: string;
}

const Header = styled.h1<Props>`
  color: ${props => props.theme.color[props.color]};
  font-size: 28pt;
`;

export const SubHeader = styled.h2<Props>`
  color: ${props => props.theme.color[props.color]};
  font-size: 20pt;
`;

Header.displayName = 'Header';

export default Header;
