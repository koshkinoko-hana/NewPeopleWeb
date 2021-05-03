import styled from 'styled-components'

const PageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 130px 0 80px;
  
  
  
  @media screen and (max-width: ${props => props.theme.width.mobileMax}) {
    padding: 70px 0 30px;
  }
`;

PageContainer.displayName = 'PageContainer';

export default PageContainer
