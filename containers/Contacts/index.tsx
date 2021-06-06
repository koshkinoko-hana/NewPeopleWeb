import React from "react";
import MapContainer from "../HomePage/styledComponents/MapContainer";
import TextBlock from "../HomePage/styledComponents/TextBlock";
import MapFrame from "../../components/Map/MapFrame";
import Container from "../../styledComponents/Container";
import Header from "../../styledComponents/Header";
import ChatLink from "./styledComponents/ChatLink";
import {IoLogoWhatsapp} from "react-icons/io";
import {FaInstagram, FaTelegram, FaPhone} from "react-icons/fa";

const Contacts: React.FC = () => {
  return (
    <Container>
      <Header color="sailDark50">Контакты</Header>
      <MapContainer>
        <MapFrame/>
        <TextBlock>
          <h2>Приходите к нам!</h2>
          <p>Мы находимся по адресу:
            <strong>ул. Переверткина, дом 1/11</strong>
          </p>
          <ChatLink href={`https://api.whatsapp.com/send?phone=+79103443033`} whatsApp><IoLogoWhatsapp/>WhatsApp</ChatLink>
          <ChatLink href={`https://t.me/Sokolova_NS`} telegram><FaTelegram/>Telegram</ChatLink>
          <ChatLink href={`https://www.instagram.com/nl_sadikvrn`} instagram><FaInstagram/>Instagram</ChatLink>
          <ChatLink href={`tel:+7 930 418-55-41`} phone><FaPhone/><strong>+7 930 418-55-41</strong></ChatLink>
          <ChatLink href={`mailto:new_people_sad@mail.ru`} phone><strong>new_people_sad@mail.ru</strong></ChatLink>
        </TextBlock>
      </MapContainer>
    </Container>
  )
};

export default Contacts;
