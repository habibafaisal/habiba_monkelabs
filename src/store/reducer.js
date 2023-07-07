import {
  ADDMESSAGE,
  REMOVEMESSAGE,
  SETINITIALLOGIN,
  SET_LOGIN_STATUS,
} from "./actionType";

const initialState = {
  isLoggedIn: false,
  messages: [],
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case SETINITIALLOGIN: {
      console.log("yahan se araha hey store se: ", action.payload);
      return action.payload;
    }
    case SET_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case ADDMESSAGE:
      console.log("yahan se araha hey store se: ", action.payload);

      return {
        ...state,
        messages: [...state.messages, action.payload],
      };

    case REMOVEMESSAGE:
      console.log("yahan se araha hey delete walay se: ", action.payload);

      return {
        ...state,
        messages: state.messages.filter(
          (message) => message.id !== action.payload
        ),
      };

    default:
      return state;
  }
}
