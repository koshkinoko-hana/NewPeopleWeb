import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.color.white};
`;

PageContainer.displayName = 'PageContainer';

export default PageContainer
