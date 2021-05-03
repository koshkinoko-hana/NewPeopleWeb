import React from "react";
import Button from "../../styledComponents/Button";
import ModalContainer from "./styledComponents/ModalContainer";
import ModalPageCover from "./styledComponents/ModalPageCover";
import CloseButton from "./styledComponents/CloseButton";
import Message from "./styledComponents/Message";

const ModalComponent: React.FC<{text: string, onHide: () => void}> = ({text, onHide}) => {
  return (
    <ModalPageCover>
      <ModalContainer>
        <CloseButton onClick={onHide}>x</CloseButton>
        <Message>{text}</Message>
        <Button onClick={onHide}>Ок</Button>
      </ModalContainer>
    </ModalPageCover>
  )
}

export default ModalComponent;
