import * as typActions from "../actions";

const initialState = { cardArr: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typActions.READ_INPUT:
      console.log(action.e.target.value);
      return {
        ...state,
        [action.id]: action.e.target.value,
      };

    default:
      break;
  }
  return state;
};

export default reducer;
