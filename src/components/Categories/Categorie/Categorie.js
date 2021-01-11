import React from "react";
import { Link } from "react-router-dom";
import s from "./Categorie.module.css";

const Categorie = (props) => {
  return (
    <Link to={props.link} className={s.Categorie} onClick={props.clicked}>
      {props.nameCategorie}
    </Link>
  );
};

export default Categorie;
