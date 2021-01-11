import React from "react";

const CategoriesContext = React.createContext({
  ua: {
    arr: [
      { value: "job", valueDisplay: "Робота" },
      { value: "apartment", valueDisplay: "Житло" },
      { value: "outfit", valueDisplay: "Інструмент" },
      { value: "auto", valueDisplay: "Авто" },
      { value: "buySell", valueDisplay: "Куплю / Продам" },
    ],
    titleChosenCategorie: "",
  },
  usa: {
    arr: [
      { value: "job", valueDisplay: "job" },
      { value: "apartment", valueDisplay: "apartment" },
      { value: "outfit", valueDisplay: "outfit" },
      { value: "auto", valueDisplay: "auto" },
      { value: "buySell", valueDisplay: "buy / sell" },
    ],
    titleChosenCategorie: "",
  },
  langues: "ua",
  titleChosenCategorie: "",
});

export default CategoriesContext;
