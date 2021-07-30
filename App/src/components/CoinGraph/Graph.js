import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import moment from "moment";


const CoinGraph = ({match}) => {
  let [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${match.params.id}/market_chart?vs_currency=usd&days=30&interval=daily`
      )
      .then((res) => {
        setCoins(res.data.prices);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

  let labels = [];

  let filteredLabels = [];

  for (let z = 0; z < coins.length; z++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[z][j] > 1000000) {
        filteredLabels.push(coins[z][j]);
      }
    }
  }

  if (filteredLabels.length === 31) {
    for (let i = 30; i > 0; i--) {
      labels.push(moment().subtract(i, "days").format("l"));
    }
  } else if (filteredLabels.length === 25) {
    for (let i = 24; i > 0; i--) {
      labels.push(moment().subtract(i, "hours").format("LT"));
    }
  } else if (filteredLabels.length === 8) {
    for (let i = 7; i > 0; i--) {
      labels.push(moment().subtract(i, "days").format("l"));
    }
  } else {
    for (let i = filteredLabels.length; i > 0; i--) {
      labels.push(moment().subtract(i, "days").format("l"));
    }

  }

  let price = [];

  for (let z = 0; z < coins.length; z++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[z][j] < 1000000) {
        price.push(coins[z][j]);
      }
    }
  }

  const handleChange = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${match.params.id}/market_chart?vs_currency=usd&days=1&interval=hourly`
      )
      .then((res) => {
        setCoins(res.data.prices);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 
  const handleChange2 = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${match.params.id}/market_chart?vs_currency=usd&days=7&interval=daily`
      )
      .then((res) => {
        setCoins(res.data.prices);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange3 = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${match.params.id}/market_chart?vs_currency=usd&days=30&interval=daily`
      )
      .then((res) => {
        setCoins(res.data.prices);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleChange4 = () => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${match.params.id}/market_chart?vs_currency=usd&days=max&interval=monthly`
      )
      .then((res) => {
        setCoins(res.data.prices);
      })
      .catch((error) => {
        console.log(error);
      });
  };

 


  let data = {
    labels: labels,
    datasets: [
      {
        label: `${match.params.id.charAt(0).toUpperCase()}${match.params.id.slice(1)} Price`,
        data: price,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div>
      <button className="waves-effect waves-light btn" onClick={handleChange}>1d</button>
      <button className="waves-effect waves-light btn" onClick={handleChange2}>7d</button>
      <button className="waves-effect waves-light btn" onClick={handleChange3}>30d</button>
      <button className="waves-effect waves-light btn" onClick={handleChange4}>All-Time</button>
      <div>
      <Line
        data={data}
        options={{ maintainAspectRatio: true}}
      />
      </div>
    </div>
  );
};

export default CoinGraph;
