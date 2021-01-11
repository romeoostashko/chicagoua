import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.clicked} className={classes.Button}>
      {props.textBtn}
    </button>
  );
};

export default Button;
