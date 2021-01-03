import React from "react";
import HeaderConatainer from "./styledComponents/HeaderContainer";
import ButtonLink from "../../styledComponents/ButtonLink";

const Header: React.FC = () => {

  return (
    <HeaderConatainer>
      <ButtonLink>Test1</ButtonLink>
      <ButtonLink>Test2</ButtonLink>
    </HeaderConatainer>
  )
}

export default Header;
