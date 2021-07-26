import "./App.css";
import Api from "./components/Api";
import React from "react";
import ReactDOM from "react-dom";
import CoinGraph from "./components/CoinGraph";
import Coins from "./components/Coins"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"


function App() {
    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Api}/>
            <Route path="/coin/:id" component={CoinGraph}/>



            </Switch>
            





        </Router>
    )


}

export default App;

