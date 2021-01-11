import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import ChangeLanguage from "./ChangeLanguage/ChangeLanguage";
import NavBarContext from "../Context/NavBarContext";

const Navbar = (props) => {
  let navBarContext = useContext(NavBarContext);
  const langues = navBarContext.langues;
  const changeLanguageHandler = navBarContext.changeLanguageHandler;

  if (navBarContext.langues === "usa") {
    navBarContext = navBarContext.ua;
  } else {
    navBarContext = navBarContext.usa;
  }

  const nav = useRef(null);

  const clicked = (props) => {
    nav.current.classList.toggle(classes.NavActive);
  };

  return (
    <nav className={classes.Navbar}>
      <div className={classes.Logo}>
        <Link to="/">{navBarContext.textLogo}</Link>
      </div>

      <ul ref={nav} className={classes.Navlink}>
        <li>
          <Link to="#">{navBarContext.textNav1}</Link>
        </li>
        <li>
          <Link to="#">{navBarContext.textNav2}</Link>
        </li>
        <li>
          <span className={classes.Phone}>{navBarContext.telNav}</span>
        </li>
        <li>
          <span className={classes.Email}>{navBarContext.emailNav}</span>
        </li>
      </ul>
      <div classes={classes.ChangeLanguage}>
        <ChangeLanguage
          lange={langues}
          changeLanguageHandler={changeLanguageHandler}
        />
      </div>

      <div onClick={clicked} className={classes.NavBurger}>
        <div className={classes.Line1}></div>
        <div className={classes.Line2}></div>
        <div className={classes.Line3}></div>
      </div>
    </nav>
  );
};

export default Navbar;
