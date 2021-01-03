import styled from 'styled-components'

const ButtonLink = styled.a`
  color: ${props => props.theme.color.halfBakedDark75};
  border: none;
  &:hover {
    background-color: ${props => props.theme.color.halfBakedDark75};
    color: ${props => props.theme.color.sail};
  }
`

export default ButtonLink;
