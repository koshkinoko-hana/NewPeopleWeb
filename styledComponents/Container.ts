import styled from "styled-components";

const Container = styled.div<{mobileNoPadding?: boolean}>`
  padding: 30px 20px;
  
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
    ${props => props.mobileNoPadding && 'padding: 0;'};
  }
`;

Container.displayName = 'Container';

export default Container;
