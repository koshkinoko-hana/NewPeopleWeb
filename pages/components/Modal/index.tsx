import React from "react";
import Modal from 'react-bootstrap/Modal'
import ButtonLink from "../../styledComponents/ButtonLink";

const ModalComponent: React.FC<{header: string, text: string}> = ({header, text}) => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{header}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{text}</p>
      </Modal.Body>

      <Modal.Footer>
        <ButtonLink>Ок</ButtonLink>
      </Modal.Footer>
    </Modal.Dialog>
  )
}
