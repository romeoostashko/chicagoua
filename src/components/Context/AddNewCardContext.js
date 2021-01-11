import React from "react";

const TitleCardContext = React.createContext({
  ua: {
    placeholderWriteHere: "Пишіть тут...",
    placeholderYourName: "Ваше ім'я",
    placeholderYourCity: "Ваше місто",
    placeholderEmail: "Ваш електронний адрес",
    placeholderTel: "Номер вашого телефону",
    textBtnNext: "Дальше",
    textBtnSend: "Надіслати оголошення",
    title2: "2. Введіть загаловок оголошення",
    title3: "3. Введіть текст оголошення",
    title4: "4. Введіть ваші персональні дані",
    title5: "5. Виберіть штат із списку",
  },
  usa: {
    placeholderWriteHere: "Write here...",
    placeholderYourName: "Your name",
    placeholderYourCity: "Your city",
    placeholderEmail: "Your email",
    placeholderTel: "Your tel.",
    textBtnNext: "Next",
    textBtnSend: "Send",
    title2: "2. Enter an ad title",
    title3: "3. Enter your ad text",
    title4: "4. Enter your personal information",
    title5: "5. Виберіть штат із списку",
  },

  langues: "ua",
});

export default TitleCardContext;
