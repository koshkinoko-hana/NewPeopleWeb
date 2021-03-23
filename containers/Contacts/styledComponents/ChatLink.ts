import styled, {css} from "styled-components";

const whatsAppMixin = css`
  background: #00B544;
  svg {
    color: #00B544;
  }
  
  &:hover {
    border: 2px solid #009E43;
    }
`

const telegramMixin = css`
  background: #00B1FF;
  svg {
    color: #00B1FF;
    padding: 1px;
  }
  
  &:hover {
    border: 2px solid #0081BC;
    }
`

const phoneMixin = css`
  background: white;
  padding-left: 23px;
  color: black;
  
  &:hover {
    border: 2px solid ${props => props.theme.color.halfBaked};
    padding-left: 21px;
  }
`

interface Props {
  whatsApp?: boolean;
  telegram?: boolean;
  phone?: boolean;
}

const ChatLink = styled.a<Props>`
  height: 45px;
  margin-bottom: 20px;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  width: 250px;
  padding-left: 30px;
  box-shadow: 0px 3px 7px 5px rgba(0, 0, 0, .07);
  
  svg {
    background: white;
    margin-right: 20px;
    width: 25px;
    height: 25px;
    border-radius: 3px;
  }
  
  &:hover {
    box-shadow: none;
    padding: 8px 13px;
    padding-left: 28px;
  }
  
  ${props => props.whatsApp && whatsAppMixin};
  ${props => props.telegram && telegramMixin};
  ${props => props.phone && phoneMixin};
`;

export default ChatLink;
