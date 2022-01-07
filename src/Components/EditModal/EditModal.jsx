import React from "react";
import { Button, Modal } from "react-bootstrap";


const EditModal = ({
  show,
  handleClose,
  productToEdit,
  setProductToEdit,
  updateProduct,
}) => {
  function handleValues(e) {
    let editedProduct = {
      ...productToEdit,
      [e.target.name]: e.target.value,
    };
    setProductToEdit(editedProduct);
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Contacts</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column align-items-center">
          {" "}
          <div>
            {" "}
            <h3 className="p-3 ">Имя</h3>
            <input
              placeholder="имя"
              className="mb-3 "
              type="text"
              onChange={handleValues}
              value={productToEdit.name}
              name="name"
            />
          </div>
          <div>
            <h3 className="p-3">Номер</h3>
            <input
              placeholder="номер"
              className="mb-3"
              type="text"
              onChange={handleValues}
              value={productToEdit.phone}
              name="phone"
            />
          </div>
          <div>
            <h3 className="p-3">Фото</h3>
            <input
              placeholder="Фото"
              className="mb-3"
              type="text"
              onChange={handleValues}
              value={productToEdit.img}
              name="img"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-success" onClick={() => updateProduct()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
