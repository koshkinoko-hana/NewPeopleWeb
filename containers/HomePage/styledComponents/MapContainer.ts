import styled from "styled-components";

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: ${props => props.theme.width.tablet}) {
    flex-direction: row;
  }
`

MapContainer.displayName = 'MapContainer';

export default MapContainer;
