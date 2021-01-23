import React from "react";
import { connect } from "react-redux";
import * as typActions from "../../store/actions";
import classes from "./OneCard.module.css";

const OneCard = (props) => {
  return (
    <div className={classes.OneCard}>
      <h3>Шукаю штукатура</h3>
      <h5>Чікаго</h5>
      <div className={classes.Line}></div>
      <p>
        {props.textBodyOneCard}
        Шукаю доброго штукатура. Зарплата маленька. На їду вистачить. Стаж
        роботи потрібний 10 років.
        <span>.. {props.readeMore}</span>
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cardsArr: state.cardsArr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CardsToState: (arr) => dispatch({ type: typActions.CARDSTOSTATE, arr }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OneCard);
