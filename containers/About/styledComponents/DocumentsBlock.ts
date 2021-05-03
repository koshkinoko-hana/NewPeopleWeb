import styled from "styled-components";

const DocumentsBlock = styled.div`
  width: 100%;
  box-shadow: 0px 3px 7px 5px rgba(0, 0, 0, .07);
  padding: 10px;
  margin-top: 20px;
  a {
    color: ${props => props.theme.color.halfBakedDark75};
    line-height: 2;
    font-size: 12pt;
    text-decoration: none;
    vertical-align: middle;
    &:hover {
      color: ${props => props.theme.color.sailDark50};
    }
    svg {
      margin-right: 5px;    
      height: 30px;
      width: 30px;
      position: relative;
      top: 10px;
    }
  }
  @media screen and (max-width: ${props => props.theme.width.mobileBigger}) {
    margin-top: 0;
    padding: 0;
    box-shadow: none;
  }
`

export default DocumentsBlock;
