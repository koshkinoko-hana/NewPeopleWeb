import React, {useEffect, useState} from "react";
import HeaderContainer from "./styledComponents/HeaderContainer";
import LinksContainer from "./styledComponents/LinksContainer";
import Logo from "./styledComponents/Logo";
import ButtonLink from "../../styledComponents/ButtonLink";
import LeaveClaimForm from "./LeaveClaimForm";
import FormContainer from "./styledComponents/FormContainer";
import HamburgerButton from "./styledComponents/HamburgerButton";
import Menu from "../Menu";
import FormDropdown from "./styledComponents/FormDropdown";

const Header: React.FC = () => {

  const [distanceToFixed, setDistanceToFixed] = useState(100);
  const [showLeaveClaim, setShowLeaveClaim] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onScroll = () => {
    const scrollHeight = 100 - window.scrollY;
    debugger;
    setDistanceToFixed(scrollHeight <= 50 ? 50 : scrollHeight);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return function cleanup() {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onClaimFormSubmit = () => {
    setShowLeaveClaim(false);
  }

  const renderLeaveClaim = () => {
    if (showLeaveClaim) {
      return (
        <FormDropdown>
          <FormContainer><LeaveClaimForm onSubmit={onClaimFormSubmit}/></FormContainer>
        </FormDropdown>
      );
    }
    return null;
  }

  return (
    <>
      <Menu isOpen={menuOpen}/>
      <HeaderContainer>
        <Logo height={distanceToFixed}/>
        <LinksContainer>
          <ButtonLink hideOnMobile>Главная</ButtonLink>
          <ButtonLink hideOnMobile>Формы пребывания</ButtonLink>
          <ButtonLink hideOnMobile>Центр развития</ButtonLink>
          <ButtonLink hideOnMobile>Новости</ButtonLink>
          <ButtonLink hideOnMobile>Контакты</ButtonLink>
          <ButtonLink blue shadowed onClick={() => setShowLeaveClaim(!showLeaveClaim)}>Оставить заявку</ButtonLink>
          {renderLeaveClaim()}
          <HamburgerButton onClick={() => setMenuOpen(!menuOpen)}/>
        </LinksContainer>
      </HeaderContainer>
    </>
  )
}

export default Header;
