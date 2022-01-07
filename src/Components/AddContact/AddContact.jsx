import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { FcContacts } from "react-icons/fc";

const AddContact = (props) => {
  return (
    <div className="m-4">
      <div width="80px" height="80px">
        <Button onClick={props.getContactEdit}>
          <FcContacts size={80} />
        </Button>
      </div>
    </div>
  );
};

export default AddContact;
