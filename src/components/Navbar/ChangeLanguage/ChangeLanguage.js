import React, { Component } from "react";
import classes from "./ChangeLanguage.module.css";

class ChangeLanguage extends Component {
  render() {
    return (
      <div
        className={classes.ChangeLanguage}
        onClick={this.props.changeLanguageHandler}
      >
        {this.props.lange}
      </div>
    );
  }
}

export default ChangeLanguage;
