import styled from "styled-components";
import Button from "../../../styledComponents/Button";

const ModalContainer = styled.div`
  position: relative;
  margin: auto;
  padding: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 400px;
  background: white;
  z-index: 1000;
  ${Button} {
    width: 200px;
    margin: 0 auto 10px;
    justify-content: center;
  }
`;

export default ModalContainer;
