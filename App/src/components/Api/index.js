import React, { Component } from "react";
import "./index.css"
import Coins from "../Coins";

export default class Api extends Component {


  state = {
    isLoading: true,
    coin: null,
  };

  async componentDidMount() {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ coin: data, isLoading: false });
  }

  render() {
    return (
      <div className="API">
        
        <input type="text" placeholder="Search"></input>
        

        {this.state.isLoading || !this.state.coin ? (
          <div>Loading....</div>
        ) : (
          this.state.coin.map((coin) => {
            return (
              <Coins
                key = {coin.id}
                id = {coin.id} 
                symbol = {coin.symbol} 
                market_cap = {coin.market_cap.toLocaleString()} 
                current_price = {coin.current_price.toLocaleString()}
              />
              
            );
          })
        )}
      </div>
    );
  }
}
