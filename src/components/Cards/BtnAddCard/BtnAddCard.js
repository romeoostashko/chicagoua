import React from "react";
import { Link } from "react-router-dom";
import classes from "./BtnAddCard.module.css";

const BtnAddCard = (props) => {
  return (
    <Link to="/cards/add-new-card" className={classes.BtnAddCard}>
      {props.textBtnAddCard}
    </Link>
  );
};

export default BtnAddCard;
