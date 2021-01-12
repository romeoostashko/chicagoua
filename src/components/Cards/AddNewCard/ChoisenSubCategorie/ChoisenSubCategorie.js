import React, { useContext } from "react";
import classes from "./ChoisenSubCategorie.module.css";
import Categorie from "../../../Categories/Categorie/Categorie";
import CategoriesContext from "../../../Context/CategoriesContext";

const ChoisenSubCategorie = (props) => {
  let categoriesContext = useContext(CategoriesContext);
  if (categoriesContext.langues === "usa") {
    categoriesContext = categoriesContext.ua;
  } else {
    categoriesContext = categoriesContext.usa;
  }

  let i = categoriesContext.arr[props.idx].value;

  console.log(i);
  return (
    <div className={classes.ChosenCategorie}>
      <h3>{categoriesContext.titleChosenCategorie}</h3>
      <Categorie
        clicked={(e, path, label) => {
          props.clicked(e, path, "search");
        }}
        link="#"
        nameCategorie={
          categoriesContext[categoriesContext.arr[props.idx].value].search
        }
        className={classes.OneCategorie}
      />
      <Categorie
        clicked={(e, path, label) => {
          props.clicked(e, path, "offer");
        }}
        link="#"
        nameCategorie={
          categoriesContext[categoriesContext.arr[props.idx].value].offer
        }
        className={classes.OneCategorie}
      />
    </div>
  );
};

export default ChoisenSubCategorie;
