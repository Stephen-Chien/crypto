import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Coin.css';
import { Link } from 'react-router-dom';

function Api() {
	let [coins, setCoins] = useState([]);
	let [searchTerm, setSearchTerm] = useState('');
	

	useEffect(() => {
		axios
			.get(
				'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
			)
			.then((res) => {
				setCoins(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	let filteredCoins = coins.filter((coin) => {
		return coin.id.toLowerCase().includes(searchTerm.toLowerCase());
	});

	return (
		
			
			<div className="coin-app">
				

				<div className="coin-search">
					<h1 className="coin-text">Search for a currency</h1>
					<input
						className="coin-input"
						placeholder="Search"
						onChange={(event) => {
							setSearchTerm(event.target.value);
						}}
					/>
				</div>
				{filteredCoins.map((coin) => (
					<div className="coin-containers">
						<div className="coin-rows">
							<div className="coin">
								<img src={coin.image} alt="crypto" />
								<h1>
									<Link to={`/coin/${coin.id}`}>{coin.name}</Link>
								</h1>
								<p className="coin-symbols"> {coin.symbol} </p>
							</div>

							<div className="coin-datas">
								<p className="coin-prices">${coin.current_price}</p>
								<p className="coin-volumse">
									${coin.total_volume.toLocaleString()}
								</p>

								{coin.price_change_percentage_24h < 0 ? (
									<p className="coin-percents-red">
										${coin.price_change_percentage_24h.toFixed(2)}%
									</p>
								) : (
									<p className="coin-percents-green">
										{coin.price_change_percentage_24h.toFixed(2)}%
									</p>
								)}

								<p className="coin-marketcaps">
									Mkt Cap: ${coin.market_cap.toLocaleString()}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		
	);
}
export default Api;
