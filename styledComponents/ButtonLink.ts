import styled, {css} from 'styled-components'
import {addBreakpointRules} from "../utils/styled";

const blueMixin = css`
  background-color: ${props => props.theme.color.sail};
  border: 2px solid rgba(0, 0, 0, 0.3);
    border: 2px solid ${props => props.theme.color.sailDark50};
  font-weight: 500;
  &:hover {
    background-color: ${props => props.theme.color.conifer};
    border: 2px solid ${props => props.theme.color.coniferDark75};
  }
`;

interface Props {
  blue?: boolean;
  shadowed?: boolean;
}

const ButtonLink = styled.a<Props>`
  color: ${props => props.theme.color.halfBakedDark75};
  text-decoration: none;
  height: 50px;
  padding: 6px 20px;
  text-align: center;
  display: flex;
  align-items: center;
  border: none;
  background-color: ${props => props.theme.color.white};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.color.sail};
    text-decoration: none;
  }
  font-weight: 200;
  
  ${props => props.blue && blueMixin};
`;

ButtonLink.displayName = 'ButtonLink';

export default addBreakpointRules(ButtonLink);
