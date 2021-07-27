import './App.css';
import Api from './components/Api/Api';
import React from 'react';
import ReactDOM from 'react-dom';
import CoinGraph from './components/CoinGraph/Graph';
import Coins from './components/Coins/Coins';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';

function App() {
	return (
		<Router>
			<Switch>
                <Route exact path="/loginpage" component={LoginPage} />
				<Route exact path="/" component={Api} />
				<Route path="/coin/:id" component={CoinGraph} />
			</Switch>
		</Router>
	);
}

export default App;
