import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";

const CoinGraph = () => {
  let [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
      )
      .then((res) => {
        setCoins(res.data.prices);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  let chartData=
  {
    labels: ['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
    datasets:[
      {
        label:'Population',
        data:[
          617594,
          181045,
          153060,
          106519,
          105162,
          95072
        ],
        backgroundColor:[
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ],
        fill: true,
      }
    ]
  }

  return (
    <div>
    <h1>Hello</h1>
    <Line
      data={chartData}
      width={100}
      height={50}
      options={{ maintainAspectRatio: true }}
    />
    </div>
  );
};

export default CoinGraph;
