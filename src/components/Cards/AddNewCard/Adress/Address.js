import React, { useContext } from "react";
import { connect } from "react-redux";
import * as typActions from "../../../store/actions";
import classes from "./Address.module.css";
import Button from "../../../Button/Button";
import AddNewCardContext from "../../../Context/AddNewCardContext";
const Address = (props) => {
  let addNewCardContext = useContext(AddNewCardContext);

  if (addNewCardContext.langues === "usa") {
    addNewCardContext = addNewCardContext.ua;
  } else {
    addNewCardContext = addNewCardContext.usa;
  }
  return (
    <div className={classes.Address}>
      <h3>{addNewCardContext.title4}</h3>
      <form className={classes.AddressForm}>
        <div>
          <input
            autoComplete="no"
            onChange={(e) => props.readInput(e, e.target.name)}
            type="text"
            required
            name="yourname"
            placeholder={addNewCardContext.placeholderYourName}
          />
          <input
            onChange={(e) => props.readInput(e, e.target.name)}
            type="text"
            required
            name="city"
            placeholder={addNewCardContext.placeholderYourCity}
          />
          <input
            onChange={(e) => props.readInput(e, e.target.name)}
            type="text"
            required
            name="email"
            placeholder={addNewCardContext.placeholderEmail}
          />
          <input
            onChange={(e) => props.readInput(e, e.target.name)}
            type="text"
            required
            name="tel"
            placeholder={addNewCardContext.placeholderTel}
          />
        </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Address);
