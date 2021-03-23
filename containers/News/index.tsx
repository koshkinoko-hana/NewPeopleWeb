import React from "react";
import Container from "../../styledComponents/Container";
import data from "./data.json";
import ButtonLink from "../../styledComponents/ButtonLink";
import NewsItem from "./styledComponents/NewsItem";
import Image from "./styledComponents/Image";
import TextBlock from "./styledComponents/TextBlock";
import Header from "../../styledComponents/Header";

const Contacts: React.FC = () => {

  const renderCards = () => {
    return Object.keys(data).map((key, index) => (
      <NewsItem key={`card-${index}`}>
        <Image src={data[key].image}/>
        <TextBlock>
          <h2>{data[key].header}</h2>
          <p>{data[key].text}</p>
        </TextBlock>
      </NewsItem>
    ))
  }

  return (
    <Container>
      <Header color="sailDark50">Новости</Header>
      {renderCards()}
    </Container>
  );
};

export default Contacts;
