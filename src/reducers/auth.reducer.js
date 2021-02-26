import { LOGIN } from "../actions/auth.actions";

export default function authReducer(state, action) {
  switch (action.type) {
    case LOGIN.REQ_LOGIN:
      sessionStorage.setItem("logged", false);
      return {
        ...state,
        isLoaded: false,
        status: "pending",
      };
    case LOGIN.REQ_LOGIN_SUCCESS:
      sessionStorage.setItem("logged", action.logged)
      return {
        ...state,
        isLoaded: true,
        status: "done",
        err: "none",
      };
    case LOGIN.REQ_LOGIN_FAIL:
      return {
        ...state,
        isLoaded: false,
        err: action.err,
        status: "fail",
      };
    default:
      return state;
  }
}
