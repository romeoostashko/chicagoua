import React, { useContext } from "react";
import classes from "./Categories.module.css";
import Categorie from "./Categorie/Categorie";
import CategoriesContext from "../Context/CategoriesContext";

const Categories = (props) => {
  let categoriesContext = useContext(CategoriesContext);

  if (categoriesContext.langues === "usa") {
    categoriesContext = categoriesContext.ua;
  } else {
    categoriesContext = categoriesContext.usa;
  }

  const arr = categoriesContext.arr.map((iteam) => (
    <Categorie link="#" key={iteam.value} nameCategorie={iteam.valueDisplay} />
  ));

  return <div className={classes.Categories}>{arr}</div>;
};

export default Categories;
