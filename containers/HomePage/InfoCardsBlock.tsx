import React from "react";
import CardsContainer from './styledComponents/CardsContainer'
import Card from './styledComponents/InfoCard';
import data from './data.json'
import {schemes} from "./constants";
import ButtonLink from "../../styledComponents/ButtonLink";

const InfoCardsBlock: React.FC = () => {
  const renderCards = () => {
    return Object.keys(data).map((key, index) => (
      <Card scheme={schemes[index]} key={`card-${index}`}>
        <div>
          <h2>{data[key].header}</h2>
          <p>{data[key].text}</p>
        </div>
        <ButtonLink href="/about">Узнать подробнее</ButtonLink>
      </Card>
    ))
  }

  return (
    <CardsContainer>
      {renderCards()}
    </CardsContainer>
  )
}

export default InfoCardsBlock;
