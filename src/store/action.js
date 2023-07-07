import {
  ADDMESSAGE,
  REMOVEMESSAGE,
  SETINITIALLOGIN,
  SET_LOGIN_STATUS,
} from "./actionType";

export const setInititialLogin = (data) => ({
  type: SETINITIALLOGIN,
  payload: data,
});
export const addMessage = (data) => ({
  type: ADDMESSAGE,
  payload: data,
});
export const removeMessage = (index) => ({
  type: REMOVEMESSAGE,
  payload: index,
});

export const setLoginStatus = (isLoggedIn) => {
  return {
    type: SET_LOGIN_STATUS,
    payload: isLoggedIn,
  };
};
