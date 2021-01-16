import styled from "styled-components";
import React from "react";
import {addBreakpointRules} from "../../../utils/styled";

const HamburgerButton = addBreakpointRules(styled.button`
  position: absolute;
  right: 20px;
  width: 50px;
  height: 50px;
  text-align: left;
  padding: 5px 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  justify-self: flex-end;
  
  span, span:before, span:after {
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: ${props => props.theme.color.halfBakedDark75};
  }
  
  span:before {
    position: absolute;
    top: -8px;
    content: "";
  }
  
  span:after {
    position: absolute;
    top: 8px;
    content: "";
  }
`);

HamburgerButton.displayName = 'HamburgerButton';

export default (props) => <HamburgerButton hideOnTabletAndDesktop {...props}><span/></HamburgerButton>;
