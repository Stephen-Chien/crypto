import React, { Component } from "react";

export default class Api extends Component {
  state = {
    isLoading: true,
    coin: null,
  };

  async componentDidMount() {
    const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ coin: data, isLoading: false });
  }

  render() {
    return (
      <div>
        {this.state.isLoading || !this.state.coin ? 
        (<div>Loading....</div>) :
        (this.state.coin.map((coin) => {
            return (
              <div>
                <h1>{coin.id}</h1>
                <h2>{coin.symbol}</h2>
                <h3>{coin.market_cap.toLocaleString()}</h3>
                <h4>{coin.current_price.toLocaleString()}</h4>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
