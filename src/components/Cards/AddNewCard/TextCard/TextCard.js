import React, { useContext } from "react";
import { connect } from "react-redux";
import * as typActions from "../../../store/actions";
import classes from "./TextCard.module.css";
import Button from "../../../Button/Button";
import AddNewCardContext from "../../../Context/AddNewCardContext";
const TextCard = (props) => {
  let addNewCardContext = useContext(AddNewCardContext);

  if (addNewCardContext.langues === "usa") {
    addNewCardContext = addNewCardContext.ua;
  } else {
    addNewCardContext = addNewCardContext.usa;
  }
  return (
    <div className={classes.TextCard}>
      <h3>{addNewCardContext.title3}</h3>
      <form>
        <textarea
          onChange={(e) => props.readInput(e, "body")}
          type="text"
          required
          name="textcard"
          placeholder={addNewCardContext.placeholderWriteHere}
        ></textarea>
        <Button
          clicked={props.clicked}
          textBtn={addNewCardContext.textBtnNext}
        ></Button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    readInput: (e, id) => dispatch({ type: typActions.READ_INPUT, e, id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TextCard);
