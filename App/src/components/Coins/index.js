import React, { Component } from "react";

class Coins extends Component {
  render() {
    const handleClick = () => {
        console.log("Hello")
    };

    return <h1 onClick={handleClick}>{this.props.id}</h1>;
  }
}

export default Coins;
