import React, { useContext } from "react";
import classes from "./TitleCard.module.css";
import Button from "../../../Button/Button";
import AddNewCardContext from "../../../Context/AddNewCardContext";

const TitleCard = (props) => {
  let addNewCardContext = useContext(AddNewCardContext);

  if (addNewCardContext.langues === "usa") {
    addNewCardContext = addNewCardContext.ua;
  } else {
    addNewCardContext = addNewCardContext.usa;
  }

  return (
    <div className={classes.TitleCard}>
      <h3>{addNewCardContext.title2}</h3>
      <form>
        <input
          autoComplete="no"
          onChange={props.onChange}
          type="text"
          required
          name="tytle"
          placeholder={addNewCardContext.placeholderWriteHere}
        />
        <Button
          clicked={props.clicked}
          textBtn={addNewCardContext.textBtnNext}
        ></Button>
      </form>
    </div>
  );
};

export default TitleCard;
