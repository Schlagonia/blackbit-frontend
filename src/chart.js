import React, { useState } from 'react';
import Popup from './popup';

export default function Chart(props) {

    const id = props.id;
    const name = {
        mm: 'Money Market',
        index: 'DeFi Index',
        farm: 'Farmn Fund',
    }

    const [ popupOpen, setPopupOpen ] = useState(false)
    
    const togglePopup =() => {
        setPopupOpen(!popupOpen)
      }

    const hiw = require('./resources/mm-hiw.jpg')


    const mm = (
        <div className='chart-body'>
        <p className='chart-title' id='mm-chart-title'>BlackBit Money Market</p>
        <div className="chart-info-div" id="how-mm-works">
            <p className="chart-info-title">How it Works:</p>
            <img id="mm-hiw-image" src={hiw} />
            <p className="chart-info">The BlackBit Money Markey (BBMM) is the easiest way to earn the the higher yields possible through decentralized finance (DeFi). No picking and choosing particular protocols, vaults or coins! No extra gas costs moving back and forth from different strategies! This actively managed fund allows you to both diversify your exposure and aggregate yields from the best protocols throughout DeFi, all with the ease of only one transaction!</p>
        </div>
        <div className='chart-info-div'>
            <p className="chart-info-title">Returns:</p>
            <div className="chart-info">
            <div className="return-dates"><p id="time">Time</p><p>1 Month</p><p>3 Month</p><p>1 Year</p></div>
            <div className="return-returns"><p id="apy">APY</p><p id="1m-return">9.32%</p><p id="3m-return">5.67%</p><p id="1y-return">7.87%</p></div>
            </div>
        </div>
        <div className='chart-info-div'>
            <p className='chart-info-title'>Fund Description: </p>
            <p className='chart-info' id="mm-chart-info">The BlackBit Money Market aims to replace traditional savings accounts, CDs, money markets and other low interest-bearing accounts by utilizing the decentralized finance ecosystem to provide the highest return with no volatility. 
            <br></br><br></br>We do this by utilizing dollar pegged stablecoins and only the most proven DeFi protocols that pay interest to depositors. The BlackBit Money Market Fund allows you to escape negatively yielding traditional market strategies and reap the benefits of the growing global, trustless DeFi ecosystem through an array of the highest quality yield aggregators and lending protocols without the gas, fees or knowledge required to traverse the ever-changing landscape yourself.
            <br></br> <br></br>With the ease of one deposit, you immediately begin earning interest while simultaneously diversifying away much of the individual protocol and smart contract risk associated with using DeFi.</p>
        </div>
        <div className="chart-info-div" id="methodology">
            <p className="chart-info-title">Methodology:</p>
            <p className="chart-info">The BlackBit Money Markey (BBMM) is the easiest way to earn the the higher yields possible through decentralized finance (DeFi). No picking and choosing particular protocols, vaults or coins! No extra gas costs moving back and forth from different strategies! This actively managed fund allows you to both diversify your exposure and aggregate yields from the best protocols throughout DeFi, all with the ease of only one transaction!</p>
        </div>
        <div className='chart-info-div' id="holdings">
            <p className='chart-info-title'>Protocols BlackBit Money Market uses:</p>
            <br></br><p className='chart-info'><a href='https://aave.com/' target="_blank">Aave:</a> AAVE is an open source and non-custodial liquidity protocol for earning interest on deposits and borrowing assets with over $20 Billion of liquidity. AAVE allows for global and permissionless borrowing and lending all backed by the trustless nature of the Ethereum blockchain. This means users such as BlackBit can provide liquidity to the protocol and earn interest on those funds based on the market set interest rates. All loans are overcollateralized meaning that if the borrower cannot pay back their loan, AAVE will liquidate the collateral to pay back all lenders such as BlackBit.</p>
            <br></br><p className="chart-info"><a href='https://compound.finance/' target="_blank">Compound:</a> Compound is another peer-to-peer lending protocol built on Ethereum similar to AAVE with over $17 Billion of liquidity. Compound was one of the first protocols to incentivize liquidity through providing extra rewards to lenders on top of the interest they earn in the form of COMP the native token for the Compound protocol. This increases the total rewards liquidity providers such as BlackBit earn. In order to keep volatility as low as possible BlackBit automatically takes the COMP rewards swaps them for a stable coin and reinvests them back into the lending pools to earn even more interest.</p> 
            <br></br><p className="chart-info"><a href='https://yearn.finance' target="_blank">Yearn:</a> Yearn is a yield aggregator that utilizes an array of different strategies to maximize rewards on certain tokens. BlackBit uses multiple different Yearn vaults focused on stable coins in order to maximize interest earned as well as diversifying away concentration risk.</p>
            <br></br><p>Other protocols BlackBit uses include DXDY, Harvest Finance, C.R.E.A.M. and more!</p>
        </div>
        <div className="chart-deposit">Simply choose which coin and how much to invest, press deposit and watch your money grow block by block!</div>
        <div id={`${id}-arrow`} >
                    <button className='arrow' onClick={() => props.onClick(id)}> 
                        {String.fromCharCode(8679)}
                    </button>
        </div>
    </div>
    
    )

    const index = (
        <div className='chart-body'>
            <p className='chart-title' id='mm-chart-title'>BlackBit DeFi Index</p>
                <div className="chart-info-div" id="how-index-works">
                    <p className="chart-info-title">How it Works:</p>
                    <img id="index-hiw-image"  />
                    <p className="chart-info">The BlackBit DeFi Index (BBDI) is the easiest way to earn the the higher yields possible through decentralized finance (DeFi). No picking and choosing particular protocols, vaults or coins! No extra gas costs moving back and forth from different strategies! This actively managed fund allows you to both diversify your exposure and aggregate yields from the best protocols throughout DeFi, all with the ease of only one transaction!</p>
                </div>
                 <div id={`${id}-arrow`} >
                    <button className='arrow' onClick={() => props.onClick(id)}> 
                        {String.fromCharCode(8679)}    
                    </button>
                </div>
        </div>
    )

    const farm = (
        <div className='chart-body'>
            <p className='chart-title' id='farm-chart-title'>BlackBit Farm'n Fund</p>
                <div className="chart-info-div" id="how-farm-works">
                    <p className="chart-info-title">How it Works:</p>
                    <img id="farm-hiw-image" />
                    <p className="chart-info">The BlackBit Farm'n Fund is the easiest way to earn the the higher yields possible through decentralized finance (DeFi). No picking and choosing particular protocols, vaults or coins! No extra gas costs moving back and forth from different strategies! This actively managed fund allows you to both diversify your exposure and aggregate yields from the best protocols throughout DeFi, all with the ease of only one transaction!</p>
                </div>
                <div id={`${id}-arrow`} >
                    <button className='arrow' onClick={() => props.onClick(id)}> 
                        {String.fromCharCode(8679)}    
                    </button>
                </div>
        </div>
    )

    let body;
    let tabOne;
    let tabTwo;
    if(id == 'mm'){
        tabOne = 'index';
        tabTwo = 'farm';
        body = mm;
    } else if(id == 'index'){
        tabOne = 'mm';
        tabTwo = 'farm';
        body = index;
    } else if(id == 'farm'){
        tabOne = 'mm';
        tabTwo = 'index';
        body = farm;
    }

    let tabOneClick = <div onClick={()=> props.onClick(tabOne)} ></div>

    return(
        <div className='chart' id={`${id}-chart`}>
            {popupOpen && <Popup
          content={
            <>
              <p>This fund is still under Construction.</p>
              <br></br>
              <p>Return at a later date to learn more.</p>
            </>
          }
          handleClose={togglePopup}
        />}
            <div className='chart-tab-section'>
                <div class='chart-tab' id={`${tabOne}-chart-tab-${id}`} onClick={() => togglePopup()}>            
                    BlackBit {name[tabOne]}
                </div>
                <div class='chart-tab' id={`${tabTwo}-chart-tab-${id}`} onClick={()=> togglePopup()}>            
                    BlackBit {name[tabTwo]}
                </div>
            </div>
            
            {body}
        </div>
    )
}