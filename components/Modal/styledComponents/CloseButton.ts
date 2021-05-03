import styled from "styled-components";

const CLoseButton = styled.button`
  color: ${props => props.theme.color.halfBakedDark50};
  font-weight: 700;
  font-size: 30px;
  position: absolute;
  right: 5px;
  top: 5px;
  border: none;
  background-color: ${props => props.theme.color.white};
  height: 30px;
  line-height: 1;
  padding-right: 5px;
  cursor: pointer;
`;

export default CLoseButton;
