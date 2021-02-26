import React from "react";
import { Switch, Route } from "react-router-dom";

import AuthContextProvider from "./context/AuthContextProvider";

import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route to="/login" component={Login} />} />
        </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
