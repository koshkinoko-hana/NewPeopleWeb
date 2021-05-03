import React from "react";
import MenuContainer from "./styledComponents/MenuContainer";
import Link from "./styledComponents/Link";
import BottomLine from "./styledComponents/BottomLine";
import LinksContainer from "./styledComponents/LinksContainer";

interface Props {isOpen?: boolean}

const Menu: React.FC<Props> = ({isOpen}) => {
  return (
    <MenuContainer active={isOpen}>
      <LinksContainer>
        <Link href="/">Главная</Link>
        <Link href="/forms">Форматы пребывания</Link>
        <Link href="/about">О нас</Link>
        <Link href="/news">Новости</Link>
        <Link href="/contacts">Контакты</Link>
      </LinksContainer>
      <BottomLine/>
    </MenuContainer>
  )
}

export default Menu;
