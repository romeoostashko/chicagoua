import React, { useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import CategoriesContext from "./components/Context/CategoriesContext";
import NavBarContext from "./components/Context/NavBarContext";
import CardsContext from "./components/Context/CardsContext";
import statesUSA from "./components/Cards/AddNewCard/statesUSA";
import StateUSContext from "./components/Context/StateUSContext";
import AddNewCardContext from "./components/Context/AddNewCardContext.js";
import addNewCardText from "./components/Cards/AddNewCard/AddnewCardText";
import categoriesText from "./components/Context/Text/CategoriesText";

function App() {
  const [lange, setstate] = useState("usa");

  const changeLanguageHandler = () => {
    if (lange === "usa") {
      setstate("ua");
    } else {
      setstate("usa");
    }
  };
  //---------------------------------
  statesUSA.langues = lange;
  //---------------------------------
  addNewCardText.langues = lange;
  //---------------------------------
  categoriesText.langues = lange;
  //---------------------------------------------------
  const NavBarText = {
    ua: {
      textLogo: "Chicago.ua",
      textNav1: "Головна",
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

    langues: lange,
    changeLanguageHandler: changeLanguageHandler,
  };
  //------------------------------------------
  const textCardsContext = {
    ua: {
      readeMore: "Читати дальше",
      textBtnAddCard: "Додати оголошення",
      textBtnAddNewCard: "Надіслати",
    },
    usa: {
      readeMore: "Reade more",
      textBtnAddCard: "Add new announcement",
      textBtnAddNewCard: "Send",
    },

    langues: lange,
  };
  //---------------------------------------
  return (
    <div className="App">
      <BrowserRouter>
        {/*навігаційна панель */}

        <NavBarContext.Provider value={NavBarText}>
          <Navbar />
        </NavBarContext.Provider>

        {/*Layout */}

        <CategoriesContext.Provider value={categoriesText}>
          <CardsContext.Provider value={textCardsContext}>
            <StateUSContext.Provider value={statesUSA}>
              <AddNewCardContext.Provider value={addNewCardText}>
                <Layout
                  textBtnAddCard="+ Дати оголошення"
                  readeMore="Читати дальше"
                  textBtnAddNewCard="Надіслати"
                />
              </AddNewCardContext.Provider>
            </StateUSContext.Provider>
          </CardsContext.Provider>
        </CategoriesContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
