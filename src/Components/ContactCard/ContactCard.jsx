import React from "react";
import { Button, Card } from "react-bootstrap";

const ContactCard = (props) => {
  function deleteCard(id) {
    props.wrappDelete(id);
  }
  
  return (
    <>
      <div className="m-3">
        <Card style={{ width: "15rem" }}>
          <Card.Body>
            <h1>
              <img src={props.item.img} alt="" width="200px" height="200px" />
            </h1>
            <Card.Title>{props.item.name}</Card.Title>
            <Card.Title>{props.item.phone}</Card.Title>
            <Button onClick={() => deleteCard(props.item.id)} variant="outline-danger">
              Delete
            </Button>
            <Button
              onClick={() => props.getProductToEdit(props.item)}
              variant="outline-success"
              className="m-2"
            >
              Edit Card
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ContactCard;
