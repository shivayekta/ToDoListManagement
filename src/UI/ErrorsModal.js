import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const ErrorsModal = (props) => {
  const [show, setShow] = useState(props.show);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="btn bg-success">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ErrorsModal;
