import React, { useContext, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as typActions from "../store/actions";
import axios from "../../axios-order";
import classes from "./Cards.module.css";
import OneCard from "./OneCard/OneCard";
import BtnAddCard from "./BtnAddCard/BtnAddCard";
import CardsContext from "../Context/CardsContext";

const Cards = (props) => {
  let arrCards = [];
  useEffect(() => {
    axios.get("/cards.json").then((response) => {
      arrCards = Object.values(response.data);
      props.CardsToState(arrCards);
    });
  }, []);

  //----------------------------------------------
  let cardsContext = useContext(CardsContext);
  if (cardsContext.langues === "usa") {
    cardsContext = cardsContext.ua;
  } else {
    cardsContext = cardsContext.usa;
  }
  //----------------------------------------------

  return (
    <div className={classes.DisplayCards}>
      <Route
        path="/"
        render={() => (
          <BtnAddCard textBtnAddCard={cardsContext.textBtnAddCard} />
        )}
      />

      <div className={classes.Cards}>
        <div className={classes.CardsSearch}>
          <Link to="/cards/full-card">
            <OneCard readeMore={cardsContext.readeMore} />
          </Link>
          <Link to="/cards/full-card">
            <OneCard readeMore={cardsContext.readeMore} />
          </Link>
        </div>

        <div className={classes.CardsGive}>
          <Link to="/cards/full-card">
            <OneCard readeMore={cardsContext.readeMore} />
          </Link>
          <Link to="/cards/full-card">
            <OneCard readeMore={cardsContext.readeMore} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cardsArr: state.cards.cardsArr,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CardsToState: (arr) => dispatch({ type: typActions.CARDS_TO_STATE, arr }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
