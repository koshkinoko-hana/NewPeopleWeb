import styled from "styled-components";

const MapFrame = styled.iframe.attrs( () => ({
  id: 'iframeTV1',
  title: 'iframeTV1',
  src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1237.6040387160904!2d39.18800435635607!3d51.65602659719933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x413b2fe5125d6595%3A0xc373791eef24b23b!2z0YPQuy4gMjAg0LvQtdGCINCe0LrRgtGP0LHRgNGPLCA5MCwg0JLQvtGA0L7QvdC10LYsINCS0L7RgNC-0L3QtdC20YHQutCw0Y8g0L7QsdC7LiwgMzk0MDA2!5e0!3m2!1sru!2sru!4v1610216548759!5m2!1sru!2sru" ,
  width:"600",
  height:"450",
  frameborder:"0",
  style: {border:0},
  allowfullscreen:"" ,
  ariaHidden:"false",
  tabindex:"0"
}))``;

MapFrame.displayName = 'MapFrame';

export default MapFrame
