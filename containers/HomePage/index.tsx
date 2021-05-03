import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../../styledComponents/Container";
import CarouselItem from "./styledComponents/CarouselItem";
import CarouselArrow from "./styledComponents/CarouselArrow";
import InfoCardsBlock from "./InfoCardsBlock";
import ChatLink from "../Contacts/styledComponents/ChatLink";

const HomePage: React.FC = () => {

  const renderArrow = (isNext?: boolean) => (onClickHandler, hasPrev, label) => {
    const style = isNext ? {right: 0} : {left: 0};
    return (
      <CarouselArrow next={isNext} style={style} onClick={onClickHandler} title={label}/>
    )
  }

  return (
    <Container mobileNoPadding>
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
            Фото <a href={`https://www.instagram.com/autmama36`}>@autmama36</a>
          </p>
        </CarouselItem>
        <CarouselItem>
          <img src="/children/2.jpg" />
          <p>
            Фото <a href={`https://www.instagram.com/autmama36`}>@autmama36</a>
          </p>
        </CarouselItem>
        <CarouselItem>
          <img src="/children/3.jpg" />
          <p>
            Фото <a href={`https://www.instagram.com/autmama36`}>@autmama36</a>
          </p>
        </CarouselItem>
        <CarouselItem>
          <img src="/children/4.jpg" />
          <p>
            Фото <a href={`https://www.instagram.com/autmama36`}>@autmama36</a>
          </p>
        </CarouselItem>
        <CarouselItem>
          <img src="/children/10.jpg" />
          <p>
            Фото <a href={`https://www.instagram.com/autmama36`}>@autmama36</a>
          </p>
        </CarouselItem>
      </Carousel>
      <InfoCardsBlock/>
    </Container>
  )
}

export default HomePage;
