import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import * as typActions from "../../store/actions";
import classes from "./AddNewCard.module.css";
import axios from "../../../axios-order";
import Button from "../../Button/Button";
import ChosenCategorie from "./ChosenCategorie/ChosenCategorie";
import CardsContext from "../../Context/CardsContext";
import TitleCard from "./TitleCard/TitleCard";
import TextCard from "./TextCard/TextCard";
import Address from "./Adress/Address";
import ChosenStateUS from "../../Cards/AddNewCard/ChosenState/ChosenState";
import FinishAddNewCard from "./FinishAddNewCard/FinishAddNewCard";
import ChoisenSubCategorie from "./ChoisenSubCategorie/ChoisenSubCategorie";

class AddNewCard extends Component {
  state = {
    typ: "",
    label: "",
    value: "",
    idx: "",
    zip: "",
  };
  //------------------------
  static contextType = CardsContext;
  //----------------------------------------
  inputChangetHandler = (e, id) => {
    this.setState({ [id]: e.target.value });
  };
  //----------------------------------------------
  submitHandler = (e, path) => {
    e.preventDefault();
    const formData = {};
    for (let key in this.state) {
      formData[key] = this.state[key];
    }
    axios.post("/cards.json", formData).then((response) => {
      console.log(response.data);
      this.props.history.push(path);
    });
  };
  //-------------------------------------------------
  chosenCategorieHandler = (e, path, value, idx) => {
    this.setState({ typ: e.target.innerText });
    if (path === "/cards/add-new-card/sub-categorie") {
      this.setState({ value, idx });
    }
    this.props.history.push(path);
  };
  //----------
  chosenSubCategorieHandler = (e, path, label) => {
    this.setState({ label });
    this.props.history.push(path);
  };

  //-------------------------------------------------
  chosenStateHandler = (e, path) => {
    this.setState({ typ: e.target.value });
    //this.props.history.push(path);
  };
  //-------------------------------------------------
  nextButtonHandler = (e, path, typState) => {
    e.preventDefault();
    if (!this.props[typState] || this.props[typState].trim() === "") {
      return;
    } else {
      this.props.history.push(path);
    }
  };
  //-------------------------------------------------
  render() {
    return (
      <div className={classes.AddNewCard}>
        <Route path="/cards/add-new-card" exact>
          <ChosenCategorie
            clicked={(e, path, value, idx) => {
              this.chosenCategorieHandler(
                e,
                "/cards/add-new-card/sub-categorie",
                value,
                idx
              );
            }}
          />
        </Route>
        <Route path="/cards/add-new-card/sub-categorie" exact>
          <ChoisenSubCategorie
            idx={this.state.idx}
            clicked={(e, path, label) => {
              this.chosenSubCategorieHandler(
                e,
                "/cards/add-new-card/title",
                label
              );
            }}
          />
        </Route>

        <Route path="/cards/add-new-card/title" exact>
          <TitleCard
            clicked={(e) => {
              this.nextButtonHandler(
                e,
                "/cards/add-new-card/text-card",
                "title"
              );
            }}
          />
        </Route>
        <Route path="/cards/add-new-card/text-card" exact>
          <TextCard
            clicked={(e) => {
              this.nextButtonHandler(
                e,
                "/cards/add-new-card/your-address",
                "body"
              );
            }}
          />
        </Route>
        <Route path="/cards/add-new-card/your-address" exact>
          <Address
            clicked={(e) => {
              this.nextButtonHandler(
                e,
                "/cards/add-new-card/your-state",
                "yourname"
              );
            }}
            onChange={(e) => {
              this.inputChangetHandler(e, e.target.name);
            }}
          />
        </Route>
        <Route path="/cards/add-new-card/your-state" exact>
          <ChosenStateUS
            clickedState={(e) => {
              this.inputChangetHandler(e, "state");
            }}
            clicked={(e) => {
              this.nextButtonHandler(e, "/cards/add-new-card/finish", "state");
            }}
          />
        </Route>
        <Route path="/cards/add-new-card/finish" exact>
          <FinishAddNewCard
            clicked={(e) => {
              this.submitHandler(e, "/");
            }}
            typ={this.state.typ}
          />
        </Route>
      </div>
    );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(AddNewCard);
