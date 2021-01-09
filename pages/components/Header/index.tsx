import React, {useEffect, useState} from "react";
import HeaderContainer from "./styledComponents/HeaderContainer";
import LinksContainer from "./styledComponents/LinksContainer";
import Logo from "./styledComponents/Logo";
import ButtonLink from "../../styledComponents/ButtonLink";
import LeaveClaimForm from "./LeaveClaimForm";
import FormContainer from "./styledComponents/FormContainer";

const Header: React.FC = () => {

  const [distanceToFixed, setDistanceToFixed] = useState(100);
  const [showLeaveClaim, setShowLeaveClaim] = useState(false);

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
        <div style={{position: 'relative', left: '-350px', justifyContent: 'space-arounds'}}>
          <FormContainer><LeaveClaimForm onSubmit={onClaimFormSubmit}/></FormContainer>
        </div>
      );
    }
    return null;
  }

  return (
    <HeaderContainer>
      <Logo height={distanceToFixed}/>
      <LinksContainer>
        <ButtonLink>Главная</ButtonLink>
        <ButtonLink>Формы пребывания</ButtonLink>
        <ButtonLink>Центр развития</ButtonLink>
        <ButtonLink>Новости</ButtonLink>
        <ButtonLink>Контакты</ButtonLink>
        <ButtonLink blue shadowed onClick={() => setShowLeaveClaim(!showLeaveClaim)}>Оставить заявку</ButtonLink>
      </LinksContainer>
      {renderLeaveClaim()}
    </HeaderContainer>
  )
}

export default Header;
