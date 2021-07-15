import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

function Api() {
  let [coins, setCoins] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  let filteredCoins = coins.filter(coin => {
    return coin.id.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="Api">
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />

      {
        filteredCoins.map((coin) => (
          <p key={coin.id}> {coin.id}</p>
        ))}
    </div>
  );
}

export default Api;
