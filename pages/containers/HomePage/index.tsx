import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../../styledComponents/Container";
import CarouselItem from "./styledComponents/CarouselItem";
import CarouselArrow from "./styledComponents/CarouselArrow";
import InfoCard from "./InfoCard";
import MapFrame from "../../components/Map/MapFrame";
import MapContainer from "./styledComponents/MapContainer";
import TextBlock from "./styledComponents/TextBlock";

const HomePage: React.FC = () => {

  const renderArrow = (isNext?: boolean) => (onClickHandler, hasPrev, label) => {
    const style = isNext ? {right: 0} : {left: 0};
    return (
      <CarouselArrow next={isNext} style={style} onClick={onClickHandler} title={label}/>
    )
  }

  return (
    <Container>
      <Carousel
        showArrows={true}
        showThumbs={false}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        showIndicators={false}
        showStatus={false}
        dynamicHeight={true}
        renderArrowPrev={renderArrow(false)}
        renderArrowNext={renderArrow(true)}
      >
        <CarouselItem>
          <img src="/children/1.jpg" />
          <p>
            <strong>Это заголовок</strong><br/>
            Это описание к фотографии 1.
          </p>
        </CarouselItem>
        <CarouselItem>
          <img src="/children/2.jpg" />
          <p>Legend 2</p>
        </CarouselItem>
        <CarouselItem>
          <img src="/children/3.jpg" />
          <p>Legend 3</p>
        </CarouselItem>
      </Carousel>
      <InfoCard/>
      {/*<MapContainer>*/}
      {/*  <TextBlock>*/}
      {/*    <h2>Приходите к нам!</h2>*/}
      {/*    <p>Мы находимся по адресу: <strong>ул. Такая, дом 479</strong></p>*/}
      {/*    <p>Телефон: <strong>8-999-000-33-22</strong></p>*/}
      {/*  </TextBlock>*/}
      {/*  <MapFrame/>*/}
      {/*</MapContainer>*/}
    </Container>
  )
}

export default HomePage;
