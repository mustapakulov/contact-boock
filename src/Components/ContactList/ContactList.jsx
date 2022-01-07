import ContactCard from "../ContactCard/ContactCard";

import React from "react";

const ContactList = (props) => {
  return (
    <div >
      <ul className="d-flex flex-wrap justify-content-center">
        {props.cards.map((item) => (
          <ContactCard
            key={item.id}
            item={item}
            wrappDelete={props.wrappDelete}
            getProductToEdit={props.getProductToEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
