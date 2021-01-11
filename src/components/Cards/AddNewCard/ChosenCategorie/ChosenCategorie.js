import React, { useContext } from "react";

import classes from "./ChosenCategorie.module.css";
import Categorie from "../../../Categories/Categorie/Categorie";
import CategoriesContext from "../../../Context/CategoriesContext";

const ChosenCategorie = (props) => {
  let categoriesContext = useContext(CategoriesContext);
  if (categoriesContext.langues === "usa") {
    categoriesContext = categoriesContext.ua;
  } else {
    categoriesContext = categoriesContext.usa;
  }

  const arr = categoriesContext.arr.map((iteam) => (
    <Categorie
      clicked={props.clicked}
      link="#"
      key={iteam.value}
      nameCategorie={iteam.valueDisplay}
      className={classes.OneCategorie}
    />
  ));
  return (
    <div className={classes.ChosenCategorie}>
      <h3>{categoriesContext.titleChosenCategorie}</h3>
      {arr}
    </div>
  );
};

export default ChosenCategorie;
