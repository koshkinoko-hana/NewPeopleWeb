import styled from "styled-components";

const СlaimForm = styled.form`
  display:flex;
  justify-content: flex-end;
  flex-direction: column;
  width: 350px;
  align-items: stretch;
  
  div {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 30px;
  
    label {
      display: flex;
      width: 150px;
      font-weight: 200;
      color: ${props => props.theme.color.halfBakedDark50};
    }
    input, textarea {
      display: flex;
      flex-grow: 1;
      margin: 10px 0 20px 10px;
      padding: 10px;
      border: solid 1px rgba(0, 0, 0, .07);
      border-radius: 3px;
    }
    
    button { 
      align-self: center;
      padding: 10px;
    }
    
    span {
      position: absolute;
      right: 30px;
      bottom: 0;
      color: ${props => props.theme.color.error};
      font-size: 8pt;
    }
  }
  
  @media screen and (max-width: ${props => props.theme.width.mobileBigger}) {
    width: 100%;
  }
`;

СlaimForm.displayName = 'СlaimForm';

export default СlaimForm;
