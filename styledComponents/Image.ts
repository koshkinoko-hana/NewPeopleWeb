import styled from "styled-components";

const Image = styled.img`
  border: 5px solid ${props => props.theme.color.sail};
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
  
`;

Image.displayName = 'Image';

export default Image;
