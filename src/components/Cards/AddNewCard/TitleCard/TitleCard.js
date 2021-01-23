import React, { useContext } from "react";
import { connect } from "react-redux";
import * as typActions from "../../../store/actions";
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
          onChange={(e) => props.readInput(e, "title")}
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    readInput: (e, id) => dispatch({ type: typActions.READ_INPUT, e, id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TitleCard);
