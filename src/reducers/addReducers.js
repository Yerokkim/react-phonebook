import { ADD_USER_DATA, DELETE_USER_DATA } from "../actions/type";
const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_USER_DATA: {
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    }

    case DELETE_USER_DATA: {
      return {
        ...state,
        users: state.users.filter((user) => user.id != action.payload),
      };
    }

    default:
      return state;
  }
}
