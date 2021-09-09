import { CLEAR_USER_INFO, SET_USER_INFO } from "../actions/user.action";

const initialState = {
  info: {},
  permission: 0,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER_INFO: {
      const { info } = action.payload;

      return { ...state, info };
    }
    case CLEAR_USER_INFO: {
      return { ...initialState };
    }
    default:
      return state;
  }
}
