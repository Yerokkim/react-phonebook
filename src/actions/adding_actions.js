import { ADD_USER_DATA, DELETE_USER_DATA } from "./type";

export const addUserData = (userData) => (dispatch) => {
  dispatch({
    type: ADD_USER_DATA,
    payload: userData,
  });
};

export const deleteUserData = (id) => (dispatch) => {
  dispatch({
    type: DELETE_USER_DATA,
    payload: id,
  });
};
