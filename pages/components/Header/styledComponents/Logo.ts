import styled from 'styled-components'

interface Props {
  height: number
}

const Logo = styled.img.attrs({
  src: '/logo.jpg'
})<Props>`
  background-color: ${props => props.theme.color.white};
  height: ${props => props.height}px;
`;

export default Logo;
