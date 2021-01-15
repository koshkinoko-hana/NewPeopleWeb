import styled from "styled-components";

const BottomLine = styled.span`
  height: 2px;
  background: ${props => props.theme.color.halfBakedDark75};
  width: calc(100% - 20px);
  margin: 30px 10px;
`;

BottomLine.displayName = 'BottomLine';
export default BottomLine;
