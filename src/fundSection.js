import React, { useState, useEffect } from 'react';
import Fund from "./fund";
import Chart from "./chart";
import { openChartMm, openChartIndex, openChartFarm } from './main';
import Popup from "./popup";

function FundSection(props) {

    const [buyToOpen, setBuyToOpen ] = useState(false)


    const openChart = (id) => {
        if(id == 'mm'){
            openChartMm(props.account)
        } else if(id == 'index'){
            openChartIndex(props.account)
        } else if(id ='farm') {
            openChartFarm(props.account)
        }
    }

    const togglePopup =() => {
        setBuyToOpen(!buyToOpen);
      }

    const deposit = (fund) => {
        props.deposit(fund);
    }

    const withdraw = (fund) => {
        props.withdraw(fund);
    }

    const displays = {
        mm: (   
                <Fund 
                    title='Money Market'
                    id='mm'
                    measurment='Current APY:'
                    account={props.account}
                    returns={props.mmReturn}
                    balance={props.mmBalance}
                    onClick={openChart}
                    walletConnected={props.walletConnected}
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
                    account={props.account}
                    returns={props.indexNav}
                    balance={props.indexBalance}
                    onClick={openChart}
                    walletConnected={props.walletConnected}
                    buyToOpen={() => togglePopup()}
                />
        ),
        farm: (
                <Fund 
                    title="Farm'n Fund"
                    id='farm'
                    measurment='30 Day Return:'
                    account={props.account}
                    returns={props.farmReturn}
                    balance={props.farmBalance}
                    onClick={openChart}
                    walletConnected={props.walletConnected}
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
            {buyToOpen && <Popup
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

export default FundSection;