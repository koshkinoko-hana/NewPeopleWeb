import styled from "styled-components";
import {addBreakpointRules} from "../../../utils/styled";

const FormDropdown = addBreakpointRules(styled.div`
  position: relative;
  left: -350px;
  justify-content: space-around;
  
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
    left: -155px;
  }
  
  @media screen and (max-width: ${props => props.theme.width.mobileBigger}) {
    position: inherit;
  }
`);

export default FormDropdown;
