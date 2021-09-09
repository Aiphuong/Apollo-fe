export const SET_USER_INFO = "SET_USER_INFO";
export const CLEAR_USER_INFO = "CLEAR_USER_INFO";

export function set_user_info(info, permission) {
  return {
    type: SET_USER_INFO,
    payload: { info, permission }
  }
}

export function clear_user_info() {
  return {
    type: CLEAR_USER_INFO,
  }
}
