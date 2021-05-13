import styled, {css} from "styled-components";

export const ShowHideAnimations = css<{next?: boolean}>`
  @keyframes show {
    from {
      background-color: transparent;
    }
  
    to {
      background-color: rgba(255,255,255, 0.5);
    }
  }
  
  @keyframes hide {
    from {
      background-color: rgba(255,255,255, 0.5);
    }
  
    to {
      background-color: transparent;
    }
  }
`;

const CarouselItem = styled.div`
  ${ShowHideAnimations};

  img::selection {
   background: transparent;
  }
  
  p {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: left;
    margin: 0;
    padding: 10px;
    padding-left: 45px;
    background-color: rgba(255,255,255, 0.5);
    font-weight: 200;
    color: ${props => props.theme.color.coniferDark50};
    font-size: 14pt;
    line-height: 1.2;
    
    strong {
      font-size: 15pt;
      line-height: 1;
    }
    
    >a {
      color: ${props => props.theme.color.halfBakedDark50};
    }
  }
  
  
  @media (any-hover: hover) {
    p {
      background-color: transparent;
      animation-duration: .3s;
      animation-name: hide;
    }    
    
    &:hover {
      p {
        animation-duration: .3s;
        animation-name: show;
        background-color: rgba(255,255,255, 0.5);
      }
    }
  }
    

  
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
    p {
      background-color: rgba(255,255,255, 0.5);
    }
  }
  
  @media screen and (max-width: ${props => props.theme.width.mobileBigger}) {
    p {
      font-size: 11pt;
      padding: 5px;
      padding-left: 15px;
    
      strong {
        font-size: 14pt;
      }
    }
  }
  
  @media screen and (max-width: ${props => props.theme.width.mobileL}) {
    p {
      font-size: 8pt;
    
      strong {
        font-size: 11pt;
      }
    }
  }
`;

CarouselItem.displayName = 'CarouselItem';

export default CarouselItem;
