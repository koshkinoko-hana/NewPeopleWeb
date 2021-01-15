import styled, {css} from "styled-components";
import ButtonLink from "../../../styledComponents/ButtonLink";

interface Props {
  scheme: string;
}

const halfBakedMixin = css`
  background: ${props => props.theme.color.halfBaked};
  color: ${props => props.theme.color.white};
  border-top: 10px solid ${props => props.theme.color.tumbleweed};
  h2 {
    color: ${props => props.theme.color.white};
  }
`

const coniferMixin = css`
  background: ${props => props.theme.color.conifer};
  color: ${props => props.theme.color.white};
  
  border-top: 10px solid ${props => props.theme.color.sail};
  
  h2 {
    color: ${props => props.theme.color.white};
  }
`

const tumbleweedMixin = css`
  background: ${props => props.theme.color.tumbleweed};
  color: ${props => props.theme.color.white};
  
  border-top: 10px solid ${props => props.theme.color.halfBaked};
  
  h2 {
    color: ${props => props.theme.color.white};
  }
`

const sailMixin = css`
  background: ${props => props.theme.color.sail};
  color: ${props => props.theme.color.white};
  
  border-top: 10px solid ${props => props.theme.color.conifer};
  h2 {
    color: ${props => props.theme.color.white};
  }
`

const InfoCard = styled.article<Props>`
  width: 100%;
  box-shadow: 0px 3px 7px 5px rgba(0, 0, 0, .07);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  h2 {
    margin: 5px 0;
  }
  
  &:hover {
    border-top: 10px solid ${props => props.theme.color.oysterBay};
    
    ${ButtonLink} {
      background-color: ${props => props.theme.color.white};
      box-shadow: 0px 3px 7px 5px rgba(0, 0, 0, .2);
    }
    ${ButtonLink}:hover {
      background-color: ${props => props.theme.color.white};
    }
  }
  
  margin-bottom: 10px;
  padding: 10px;
  p {
    padding: 0;
    margin: 0;
  }
  
  ${ButtonLink} {
    margin-top: 10px;
    justify-content: center;
  }
  
  @media screen and (min-width: ${props => props.theme.width.mobileL}) {
    width: calc(50% - 20px);
  }
  
  @media screen and (min-width: ${props => props.theme.width.laptop}) {
    width: calc(25% - 20px);
  }
  ${props => props.scheme === 'halfBaked' && halfBakedMixin};
  ${props => props.scheme === 'conifer' && coniferMixin};
  ${props => props.scheme === 'tumbleweed' && tumbleweedMixin};
  ${props => props.scheme === 'sail' && sailMixin};
`

export default InfoCard;
