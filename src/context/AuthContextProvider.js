import React, { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import authReducer from "../reducers/auth.reducer";

const AuthContextProvider = (props) => {
  const [authState, dispatch] = useReducer(authReducer, {
    isLoaded: false,
    err: null,
    status: null,
  });

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
