import React from "react";

const CardsContext = React.createContext({
  ua: {
    readeMore: "Читати дальше",
    textBtnAddCard: "Додати оголошення",
    textBtnAddNewCard: "Надіслати",
  },
  usa: {
    readeMore: "Reade more",
    textBtnAddCard: "Add new announcement",
    textBtnAddNewCard: "Send",
  },

  langues: "ua",
});

export default CardsContext;
