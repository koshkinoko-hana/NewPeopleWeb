import styled from "styled-components";

const claimForm = styled.form`
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
  
    label {
      display: flex;
      font-weight: 200;
      color: ${props => props.theme.color.halfBakedDark50};
    }
    input, textarea {
      display: flex;
      width: 150px;
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
      right: 0;
      bottom: 0;
      color: ${props => props.theme.color.error};
      font-size: 8pt;
    }
  }
`

export default claimForm;