import React, { useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";
import {
  reqLogin,
  reqLoginFail,
  reqLoginSuccess,
} from "../actions/auth.actions";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  function handleLogin() {
    dispatch(reqLogin());
    try {
      dispatch(reqLoginSuccess(true));
    } catch (err) {
      dispatch(reqLoginFail(err));
    }
    history.push("/");
  }

  if (!sessionStorage.getItem("logged")) {
    return (
      <>
        <input type="text" placeholder="typing your username" />
        <input type="password" placeholder="typing your password" />
        <button
          onClick={() => {
            handleLogin();
          }}
        >
          Sign In
        </button>
      </>
    );
  }

  return <Redirect to="/" />;
};

export default Login;
