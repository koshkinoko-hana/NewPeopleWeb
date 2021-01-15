import styled from 'styled-components'
import ButtonLink from "../../../styledComponents/ButtonLink";

const LinksContainer = styled.div`
  background-color: ${props => props.theme.color.white};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 1;
  
  @media screen and (max-width: ${props => props.theme.width.mobileM}) {
    padding-right: 0;
    padding-left: 0;
    justify-content: center;
    ${ButtonLink} {
        font-size: 12px;
    }
  }
  
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
    padding-right: 80px;
    padding-left: 30px;
    justify-content: flex-start;
    ${ButtonLink} {
        padding: 6px 20px;
    }
  }
  
  @media screen and (max-width: 900px) {
    ${ButtonLink} {
        padding: 6px 10px;
    }
  }
`;

export default LinksContainer;
