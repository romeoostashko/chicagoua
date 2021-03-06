import React, { useContext } from "react";
import { connect } from "react-redux";
import * as typActions from "../../../store/actions";
import classes from "./FinishAddNewCard.module.css";
import Button from "../../../Button/Button";
import AddNewCardContext from "../../../Context/AddNewCardContext";
const FinishAddNewCard = (props) => {
  let addNewCardContext = useContext(AddNewCardContext);
  if (addNewCardContext.langues === "usa") {
    addNewCardContext = addNewCardContext.ua;
  } else {
    addNewCardContext = addNewCardContext.usa;
  }
  return (
    <div className={classes.FinishAddNewCard}>
      <h2>{addNewCardContext.finishH2}:</h2>
      <h4>{props.title}</h4>
      <p>{props.body}</p>
      <div>
        <p>
          {addNewCardContext.finishTyp} : {props.typ}
        </p>
        <p>
          {addNewCardContext.placeholderYourName} : {props.yourname}
        </p>
        <p>
          {addNewCardContext.placeholderYourCity} : {props.city}
        </p>
        <p>
          {addNewCardContext.finishState} : {props.state}
        </p>
        <p>
          {addNewCardContext.placeholderEmail} : {props.email}
        </p>
        <p>
          {addNewCardContext.placeholderTel} : {props.tel}
        </p>
      </div>
      <Button clicked={props.clicked} textBtn={addNewCardContext.textBtnSend} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state.addNewCards.title,
    body: state.addNewCards.body,
    yourname: state.addNewCards.yourname,
    city: state.addNewCards.city,
    email: state.addNewCards.email,
    tel: state.addNewCards.tel,
    state: state.addNewCards.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FinishAddNewCard);
