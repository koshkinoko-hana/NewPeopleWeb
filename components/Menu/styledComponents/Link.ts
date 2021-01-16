import styled from "styled-components";

const Link = styled.a`
  color: ${props => props.theme.color.halfBakedDark75};
  font-size: 14pt;
  text-transform: uppercase;
  
  &:hover {
    color: ${props => props.theme.color.sailDark50};
    text-decoration: none;
  }
`;

Link.displayName = 'Link';
export default Link;
