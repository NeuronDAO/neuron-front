import React from "react";
import ReactDOM from "react-dom";
// Подключаем разлинковку
import {createBrowserHistory} from "history";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// LANDING PAGE
import HomePage from "./views/HomePage/HomePage";
import ExplorerPage from "./views/ExplorerPage";
import ExplorerVievPage from "./views/ExplorerVievPage";
import LeadPage from "./views/LeadPage";
import MySettingPage from "./views/MySettingPage";
import MyDashboard from "./views/MyProfilePage/MyProfilePage";
import CreateBount from "./views/CreateBount";

// STYLE CSS
import "./static/css/root.css";
import "fontsource-roboto";

const App = () => {
  const hist = createBrowserHistory();

  return (
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
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
