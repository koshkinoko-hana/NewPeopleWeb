import React from "react";
import Container from "../../styledComponents/Container";
import Header, {SubHeader} from "../../styledComponents/Header";
import data from "./data.json";
import Card from "../HomePage/styledComponents/InfoCard";
import {schemes} from "../HomePage/constants";
import CardsContainer from "../HomePage/styledComponents/CardsContainer";

const GroupForms: React.FC = () => {

  const renderCards = () => {
    return Object.keys(data.general).map((key, index) => {
      const scheme = index % 4;
      return (
        <Card scheme={schemes[scheme]} key={`card-${index}`} three>
          <div>
            <h2>{data.general[key].full.header}</h2>
            <p>{data.general[key].full.text}</p>
            <br/>
            <strong>{data.general[key].full.price}</strong>
          </div>
          <br/>
          <div>
            <h2>{data.general[key].half.header}</h2>
            <p>{data.general[key].half.text}</p>
            <br/>
            <strong>{data.general[key].half.price}</strong>
          </div>
        </Card>
      )
    })
  }

  const renderAdditional = () => {
        return (
          <CardsContainer>
          <Card scheme={schemes[0]} key={`card-1`} three>
            <div>
              <h2>{data.additional.full.header}</h2>
              <p>{data.additional.full.text}</p>
              <br/>
              <strong>{data.additional.full.price}</strong>
            </div>
          </Card>
          <Card scheme={schemes[1]} key={`card-2`} three>
            <div>
              <h2>{data.additional.half.header}</h2>
              <p>{data.additional.half.text}</p>
              <br/>
              <strong>{data.additional.half.price}</strong>
            </div>
          </Card>
          </CardsContainer>
        )
  }

  return (
    <Container>
      <Header color="sailDark50">Наши форматы</Header>
      <CardsContainer>
        {renderCards()}
      </CardsContainer>
      <SubHeader color="halfBakedDark75">Дополнительные форматы</SubHeader>
      {renderAdditional()}
    </Container>
  )
};

export default GroupForms;
