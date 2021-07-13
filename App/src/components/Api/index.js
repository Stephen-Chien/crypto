import React, { Component } from 'react'

export default class Api extends Component {


    state = {
        isLoading : true,
        coin : null
    }


    async componentDidMount() {
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        const response = await fetch(url)
        const data = await response.json()
        this.setState({coin : data[0], isLoading : false})
        console.log(data)
    }



    render() {
        return (
            <div>
                {this.state.isLoading || !this.state.coin ? <div>Loading....</div> : 
                
                <div>
                    {this.state.coin.id}
                    <br/>
                    {this.state.coin.symbol}
                    <br/>
                    {this.state.coin.market_cap}
                    <br/>
                    {this.state.coin.image}
                    <br/>
                    {this.state.coin.current_price}
                    <br/>
                
                </div>}


            </div>

            
        )
        
    }
}


