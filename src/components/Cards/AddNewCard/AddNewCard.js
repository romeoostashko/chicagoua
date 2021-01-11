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

class AddNewCard extends Component {
  state = {
    typ: "",
    title: "",
    body: "",
    yourname: "",
    state: "",
    city: "",
    zip: "",
    email: "",
    tel: "",
  };

  static contextType = CardsContext;

  inputChangetHandler = (e, id) => {
    this.setState({ [id]: e.target.value });
    console.log(this.state);
    console.log(e);
  };

  /* submitHandler = (e) => {
    e.preventDefault();
    console.log("hi");
    const formData = {};
    for (let key in this.state.orderForm) {
      formData[key] = this.state.orderForm[key].value;
    }
    axios.post("/cards.json", formData).then((response) => {
      console.log(response);
    });
  };*/

  chosenCategorieHandler = (e, path) => {
    this.setState({ typ: e.target.innerText });
    this.props.history.push(path);
  };

  chosenStateHandler = (e, path) => {
    this.setState({ typ: e.target.value });
    //this.props.history.push(path);
  };

  nextButtonHandler = (e, path) => {
    e.preventDefault();
    if (this.state.title === "") {
      return;
    } else {
      this.props.history.push(path);
    }
  };

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
              this.nextButtonHandler(e, "/cards/add-new-card/text-card");
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
              this.nextButtonHandler(e, "/cards/add-new-card/your-address");
            }}
          />
        </Route>
        <Route path="/cards/add-new-card/your-address" exact>
          <Address
            clicked={(e) => {
              this.nextButtonHandler(e, "/cards/add-new-card/your-state");
            }}
            onChange={(e) => {
              this.inputChangetHandler(e, e.target.name);
            }}
          />
        </Route>
        <Route path="/cards/add-new-card/your-state" exact>
          <ChosenStateUS
            clicked={(e) => {
              this.chosenStateHandler(e, "/cards/add-new-card/title");
            }}
          />
        </Route>
      </div>
    );
  }
}

export default AddNewCard;
