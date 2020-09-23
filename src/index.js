import React from "react";
import ReactDOM from "react-dom";
import {createBrowserHistory} from "history";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Home from "./views/Home";
import Explorer from "./views/Explorer";
import ExplorerView from "./views/ExplorerView";
import Lead from "./views/Lead";
import MySetting from "./views/MySettings";
import MyDashboard from "./views/MyProfile";
import CreateBounty from "./views/CreateBounty";

import "./static/css/root.css";
import "fontsource-roboto";

// import {CreateBounty} from "./dist/es";

const App = () => {
  const hist = createBrowserHistory();

  return (
    <Router history={hist}>
      <Switch>
        <Route path="/explorer/view" component={ExplorerView} />
        <Route path="/explorer" component={Explorer} />
        <Route path="/leaderboard" component={Lead} />
        <Route path="/create-bounty" component={CreateBounty} />

        <Route path="/my/setting" component={MySetting} />
        <Route path="/my/dashboard" component={MyDashboard} />

        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// export {default as Explorer} from "./views/Explorer";
// export {default as ExplorerView} from "./views/ExplorerView";
// export {default as Lead} from "./views/Lead";
// export {default as MySettings} from "./views/MySettings";
// export {default as CreateBounty} from "./views/CreateBounty";
