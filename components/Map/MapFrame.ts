import styled from "styled-components";

const MapFrame = styled.iframe.attrs( () => ({
  id: 'iframeTV1',
  title: 'iframeTV1',
  src: `https://www.google.com/maps/embed/v1/place?q=${process.env.MAP_KEY}&language=ru`,
  height:"450",
  frameborder:"0",
  style: {border:0},
  allowfullscreen:"" ,
  ariaHidden:"false",
  tabindex:"0"
}))`
  width:600px;
  @media screen and (max-width: ${props => props.theme.width.laptop}) {
    width: 400px;
    height: 300px;
  }
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
    width: calc(100% - 60px);
  }
  @media screen and (max-width: ${props => props.theme.width.mobileL}) {
    width: calc(100% - 60px);
    height: 200px;
  }
`;

MapFrame.displayName = 'MapFrame';

export default MapFrame;
