import * as typActions from "../actions";

const initialState = { cardArr: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typActions.CARDS_TO_STATE:
      console.log(action.arr);
      return {
        ...state,
        cardsArr: [...action.arr],
      };

    default:
      break;
  }
  return state;
};

export default reducer;
