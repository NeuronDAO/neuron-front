import React from "react";
import ReactDOM from "react-dom";
// Подключаем разлинковку
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router";

// LANDING PAGE
import HomePage from "./views/HomePage/HomePage";
import ExplorerPage from "./views/ExplorerPage/Index";
import ExplorerVievPage from "./views/ExplorerVievPage/Index";
import LeadPage from "./views/LeadPage/Index";
import MySettingPage from "./views/MySettingPage/Index";
import MyDashboard from "./views/MyProfilePage/MyProfilePage";
import CreateBount from "./views/CreateBount/Index";
// STYLE CSS
import "./assets/css/style.css";
import "fontsource-roboto";

//
var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/explorer/viev" component={ExplorerVievPage} />
      <Route path="/explorer" component={ExplorerPage} />
      <Route path="/leaderboard" component={LeadPage} />
      <Route path="/create-bounty" component={CreateBount} />

      <Route path="/my/setting" component={MySettingPage} />
      <Route path="/my/dashboard" component={MyDashboard} />

      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
