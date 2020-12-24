import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./component/dashboard/Dashboard";
import Login, { User } from "./component/login/Login";
import PageNotFound from "./component/pagenotfound/PageNotFound";

const App = () => {
  const [isUserSigned, setIsUserSigned] = useState<boolean>(false);

  const handleLogin = (user: User) => {
    if (user.userName === "root" && user.password === "root")
      setIsUserSigned((prevState) => !prevState);
  };

  return (
    <div className="app_container">
      <Router>
        <Switch>
          <Route path="/dashboard">
            {!isUserSigned ? (
              <Redirect to="/login"></Redirect>
            ) : (
              <Dashboard handleLogin={handleLogin}></Dashboard>
            )}
          </Route>
          <Route path="/login">
            {isUserSigned ? (
              <Redirect to="/dashboard"></Redirect>
            ) : (
              <Login handleLogin={handleLogin}></Login>
            )}
          </Route>
          <Route exact path="/">
            {isUserSigned ? (
              <Redirect to="/dashboard"></Redirect>
            ) : (
              <Redirect to="/login"></Redirect>
            )}
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
