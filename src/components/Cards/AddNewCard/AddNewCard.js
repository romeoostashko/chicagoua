import React, { Component } from "react";
import { Route } from "react-router-dom";
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

class AddNewCard extends Component {
  state = {
    typ: "",
    status: "",
    title: "",
    body: "",
    yourname: "",
    state: "",
    city: "",
    zip: "",
    email: "",
    tel: "",
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
  chosenCategorieHandler = (e, path) => {
    this.setState({ typ: e.target.innerText });
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
    if (this.state[typState] === "") {
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
            clicked={(e) => {
              this.chosenCategorieHandler(e, "/cards/add-new-card/title");
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
            onChange={(e) => {
              this.inputChangetHandler(e, "title");
            }}
          />
        </Route>
        <Route path="/cards/add-new-card/text-card" exact>
          <TextCard
            onChange={(e) => {
              this.inputChangetHandler(e, "body");
            }}
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
                e.target.name
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
            title={this.state.title}
            body={this.state.body}
            typ={this.state.typ}
            yourname={this.state.yourname}
            city={this.state.city}
            state={this.state.state}
            email={this.state.email}
            tel={this.state.tel}
          />
        </Route>
      </div>
    );
  }
}

export default AddNewCard;
