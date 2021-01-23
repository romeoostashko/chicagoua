import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as typActions from "../store/actions";
import classes from "./Layout.module.css";
import Categories from "../Categories/Categories";
import Cards from "../Cards/Cards";
import AddNewCard from "../Cards/AddNewCard/AddNewCard";

class Layout extends Component {
  render() {
    return (
      <div className={classes.Layout}>
        <Route path="/" component={Categories} />
        <Switch>
          <Route
            path="/chicagoua/"
            render={() => (
              <Cards
                textBtnAddCard={this.props.textBtnAddCard}
                readeMore={this.props.readeMore}
              />
            )}
          />
          <Route
            path="/cards/add-new-card"
            render={(props) => (
              <AddNewCard
                {...props}
                textBtnAddNewCard={this.props.textBtnAddNewCard}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default Layout;
