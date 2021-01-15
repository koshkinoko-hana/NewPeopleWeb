import styled from "styled-components";

const FormContainer = styled.div`
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 3px 7px 5px rgba(0, 0, 0, .07);
  width: 350px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
  @media screen and (max-width: ${props => props.theme.width.mobileBigger}) {
    top: 50px;
    left: 0;
    width: 100%;
  }
`

export default FormContainer;
