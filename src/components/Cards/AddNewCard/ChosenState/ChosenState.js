import React, { useContext } from "react";
import { connect } from "react-redux";
import * as typActions from "../../../store/actions";
import classes from "./ChosenState.module.css";
import StateUSContext from "../../../Context/StateUSContext";
import Button from "../../../Button/Button";
import AddNewCardContext from "../../../Context/AddNewCardContext";

const ChosenStateUS = (props) => {
  let addNewCardContext = useContext(AddNewCardContext);
  let stateUS = useContext(StateUSContext);
  if (stateUS.langues === "usa") {
    stateUS = stateUS.ua;
    addNewCardContext = addNewCardContext.ua;
  } else {
    stateUS = stateUS.usa;
    addNewCardContext = addNewCardContext.usa;
  }

  return (
    <div className={classes.ChosenStateUS}>
      <h3>{addNewCardContext.title5}</h3>
      <select onChange={(e) => props.readInput(e, "state")} name="states">
        <option disabled defaultValue className={classes.Placeholder}>
          {addNewCardContext.placeholder5ListStates}
        </option>
        {stateUS.map((iteam) => (
          <option key={iteam.name} value={iteam.name}>
            {iteam.name}
          </option>
        ))}
      </select>
      <Button clicked={props.clicked} textBtn={addNewCardContext.textBtnNext} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ChosenStateUS);
