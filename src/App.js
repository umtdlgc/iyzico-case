import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import Detail from './pages/Detail'

const App = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact component={Home} path="/"></Route>
                <Route exact component={Detail} path="/detail/:id"></Route>
            </Switch>
        </Router>
    );
};

export default App;
