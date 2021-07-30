import './App.css';
import Api from './components/Api/Api';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import CoinGraph from './components/CoinGraph/Graph';
import Coins from './components/Coins/Coins';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';

function App() {
	let [darkMode, setDarkMode] = useState(true);
	return (
		<div className={darkMode ? 'dark-mode' : 'light-mode'}>
			<div className="container">
				<span style={{ color: darkMode ? 'grey' : 'yellow' }}>☀︎</span>
				<div className="switch-checkbox">
					<label className="switch">
						<input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
						<span className="slider round"> </span>
					</label>
				</div>
				<span style={{ color: darkMode ? '#c96dfd' : 'grey' }}>☽</span>
			</div>

			<Router>
				<Switch>
					<Route exact path="/loginpage" component={LoginPage} />
					<Route exact path="/" component={Api} />
					<Route path="/coin/:id" component={CoinGraph} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
