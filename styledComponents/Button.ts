import styled from 'styled-components'

const Button = styled.button`
  font-family: "ComicHelvetic";
  font-size: 12pt;
  font-weight: 500 !important;
  color: ${props => props.theme.color.halfBakedDark50} !important;
  height: 50px;
  padding: 6px 20px;
  text-align: center;
  display: flex;
  align-self: center;
  align-items: center;
  border: none;
  background-color: ${props => props.theme.color.white};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.color.sail};
  }
  font-weight: 200;
`;

Button.displayName = 'Button';

export default Button;
