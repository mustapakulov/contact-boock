import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";

const AddModal = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [img, setImg] = useState("");

  const handleAdd = () => {
    const newCard = {
      img,
      name,
      phone,
      id: Date.now(),
    };
    props.wrappCard(newCard);
    setPhone("");

    setName("");

    setImg("");
  };

  return (
    <>
      <div className="mb-3">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="имя"
        />
      </div>
      <div className="mb-3">
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="number"
          placeholder="ваш номер"
        />
      </div>
      <div className="mb-3">
        <input
          value={img}
          onChange={(e) => setImg(e.target.value)}
          type="text"
          placeholder="фото"
        />
      </div>

      <Button onClick={handleAdd} as={Col} variant="outline-success">
        Add contact
      </Button>
    </>
  );
};

export default AddModal;
