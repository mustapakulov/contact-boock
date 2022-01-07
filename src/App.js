import { useState } from "react";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import AddModal from "./Components/AddModal/AddModal";

import ContactList from "./Components/ContactList/ContactList";
import EditModal from "./Components/EditModal/EditModal";

function App() {
  const [cards, setCards] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);

  let [show, setShow] = useState(false);
  let handleClose = () => setShow(false);
  let handleShow = () => setShow(true);
  let contactShow = () => {
    setShow(true);
    console.log(show);
  };

  function getProductToEdit(item) {
    setProductToEdit(item);
    handleShow();
  }

  function updateProduct() {
    let arr = cards.map((item) => {
      if (item.id !== productToEdit.id) {
        return item;
      } else {
        return productToEdit;
      }
    });
    setCards(arr);
    handleClose();
  }

  function wrappCard(newObj) {
    let newCard = [...cards];
    newCard.push(newObj);
    setCards(newCard);
  }
  function wrappDelete(id) {
    let newArr = cards.filter((item) => {
      return item.id !== id;
    });
    setCards(newArr);
  }
  return (
    <div className="App img">
      <AddContact wrappCard={wrappCard} contactShow={contactShow} />
      <AddModal wrappCard={wrappCard} show={show} />
      <ContactList
        cards={cards}
        wrappDelete={wrappDelete}
        getProductToEdit={getProductToEdit}
      />
      {productToEdit ? (
        <EditModal
          productToEdit={productToEdit}
          setProductToEdit={setProductToEdit}
          show={show}
          handleClose={handleClose}
          updateProduct={updateProduct}
        />
      ) : null}
    </div>
  );
}

export default App;
