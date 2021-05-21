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
        <Card scheme={schemes[scheme]} key={`card-${index}`}>
          <div>
            <h2>{data.general[key].full.header}</h2>
            <p>
              <ul>
                {
                  data.general[key].full.list.map(item => (
                    <li>{item}</li>
                  ))
                }
              </ul>
            </p>
            <div>{data.general[key].full.price}</div>
          </div>
          <br/>
          <div>
            <h2>{data.general[key].half.header}</h2>
            <p>
              <ul>
                <li>{data.general[key].half.text}</li>
              </ul>
            </p>
            <div>{data.general[key].half.price}</div>
          </div>
        </Card>
      )
    })
  }

  const renderAdditional = () => {
        return (
          <CardsContainer>
            <Card scheme={schemes[0]} key={`card-1`}>
              <div>
                <h2>{data.additional.full.header}</h2>
                <p>
                  <ul>
                    <li>{data.additional.full.text}</li>
                  </ul>
                </p>
                <div>{data.additional.full.price}</div>
              </div>
            </Card>
            <Card scheme={schemes[1]} key={`card-2`}>
              <div>
                <h2>{data.additional.half.header}</h2>
                <p>
                  <ul>
                    <li>{data.additional.half.text}</li>
                  </ul>
                </p>
                <div>{data.additional.half.price}</div>
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
