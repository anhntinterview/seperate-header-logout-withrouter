import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

export default () => {
  useEffect(() => {
    sessionStorage.removeItem("logged");
  }, []);
  return <Redirect to="/login" />;
};
