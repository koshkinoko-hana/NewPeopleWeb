import React from "react";
import MenuContainer from "./styledComponents/MenuContainer";
import Link from "./styledComponents/Link";
import BottomLine from "./styledComponents/BottomLine";
import LinksContainer from "./styledComponents/LinksContainer";
import ButtonLink from "../../styledComponents/ButtonLink";

interface Props {isOpen?: boolean}

const Menu: React.FC<Props> = ({isOpen}) => {
  return (
    <MenuContainer active={isOpen}>
      <LinksContainer>
        <Link href="/">Главная</Link>
        <Link href="/forms">Форматы пребывания</Link>
        <Link>Центр развития</Link>
        <Link href="/news">Новости</Link>
        <Link href="/contacts">Контакты</Link>
      </LinksContainer>
      <BottomLine/>
    </MenuContainer>
  )
}

export default Menu;
