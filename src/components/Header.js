import React, { useEffect, useState } from "react";
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <>
      <h1>Logo</h1>
      {sessionStorage.getItem("logged") ? (
        <>
          {" "}
          <nav className="navbar navbar-light">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <button
                onClick={() => {
                  sessionStorage.removeItem("logged");
                  history.push("/");
                }}
              >
                logout
              </button>
            </ul>
          </nav>
        </>
      ) : null}
    </>
  );
};

export default withRouter(Header);
