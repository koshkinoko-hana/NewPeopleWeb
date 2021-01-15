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
        <Link>Главная</Link>
        <Link>Формы пребывания</Link>
        <Link>Центр развития</Link>
        <Link>Новости</Link>
        <Link>Контакты</Link>
      </LinksContainer>
      <BottomLine/>
    </MenuContainer>
  )
}

export default Menu;
