import React, { Component } from "react";
import Fund from "./fund";
import Chart from "./chart";
import { openChartMm, openChartIndex, openChartFarm } from './main';
import Popup from "./popup";

class FundSection extends Component {

    
    constructor(props){ 
        super(props)
        this.state = {
            buyToOpen: false,
        }

    }

    render() {

    const openChart = (id) => {
        if(id == 'mm'){
            openChartMm(this.props.account)
        } else if(id == 'index'){
            openChartIndex(this.props.account)
        } else if(id ='farm') {
            openChartFarm(this.props.account)
        }
    }

    const togglePopup =() => {
        this.setState({ buyToOpen: !this.state.buyToOpen });
      }

    const deposit = (fund) => {
        this.props.deposit(fund);
    }

    const withdraw = (fund) => {
        this.props.withdraw(fund);
    }

    const displays = {
        mm: (   
                <Fund 
                    title='Money Market'
                    id='mm'
                    measurment='Current APY:'
                    account={this.props.account}
                    returns={this.props.mmReturn}
                    balance={this.props.mmBalance}
                    onClick={openChart}
                    walletConnected={this.props.walletConnected}
                    deposit={deposit}
                    withdraw={withdraw}
                    buyToOpen={() => togglePopup()}
                />
            ),
        index: (
                <Fund 
                    title='DeFi Index'
                    id='index'
                    measurment='NAV:'
                    account={this.props.account}
                    returns={this.props.indexNav}
                    balance={this.props.indexBalance}
                    onClick={openChart}
                    walletConnected={this.props.walletConnected}
                    buyToOpen={() => togglePopup()}
                />
        ),
        farm: (
                <Fund 
                    title="Farm'n Fund"
                    id='farm'
                    measurment='30 Day Return:'
                    account={this.props.account}
                    returns={this.props.farmReturn}
                    balance={this.props.farmBalance}
                    onClick={openChart}
                    walletConnected={this.props.walletConnected}
                    buyToOpen={() => togglePopup()}
                />
                
        ), 
        mmChart: (
                <Chart
                    id='mm'
                    onClick={openChart}
                />
        ),
        indexChart: (
                <Chart  
                    id='index'
                    onClick={openChart}
                />
        ),
        farmChart: (
                <Chart
                    id='farm'
                    onClick={openChart}
                />    
        ),
    }


    const all = [displays.mm, displays.mmChart, displays.index, displays.indexChart, displays.farm, displays.farmChart]

    return (
        <div className='fund-section'>
            {this.state.buyToOpen && <Popup
                content={
                    <>
                        <h3>How To Buy!!!!</h3>
                    </>
                }
                handleClose={togglePopup}
            />}
            {all}
        </div>
    )
    }
}

export default FundSection;