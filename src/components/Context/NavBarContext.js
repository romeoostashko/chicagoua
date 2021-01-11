import React from "react";

const NavBarContext = React.createContext({
  ua: {
    textLogo: "Chicagoo.ua",
    textNav1: "Головнаa",
    textNav2: "Оголошення",
    telNav: "+111 111",
    emailNav: "dima@gmail.com",
  },
  usa: {
    textLogo: "Chicago.ua",
    textNav1: "home",
    textNav2: "announcement",
    telNav: "+111 111",
    emailNav: "dima@gmail.com",
  },

  langues: "ua",
  changeLanguageHandler: () => {},
});

export default NavBarContext;
