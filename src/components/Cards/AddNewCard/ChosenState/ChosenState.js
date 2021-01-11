import React, { useContext } from "react";
import classes from "./ChosenState.module.css";
import StateUSContext from "../../../Context/StateUSContext";
import Button from "../../../Button/Button";

const ChosenStateUS = (props) => {
  let stateUS = useContext(StateUSContext);
  if (stateUS.langues === "usa") {
    stateUS = stateUS.ua;
  } else {
    stateUS = stateUS.usa;
  }

  return (
    <div className={classes.ChosenStateUS}>
      <h3>5. Виберіть штат із списку</h3>
      <select onChange={props.clicked} name="states">
        <option disabled defaultValue className={classes.Placeholder}>
          Виберіть штат
        </option>
        {stateUS.map((iteam) => (
          <option key={iteam.name} value={iteam.name}>
            {iteam.name}
          </option>
        ))}
      </select>
      <Button clicked={props.clicked} textBtn="Надіслати оголошення" />
    </div>
  );
};

export default ChosenStateUS;
