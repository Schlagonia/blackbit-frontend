import React, { useState, useEffect } from 'react';
import './blackbit-tiles-black.css';
import Connection from './connector'
import FundOpen from './fundOpen';



export default function Fund(props){

    const id = props.id;

    const [ fundOpen, setFundOpen ] = useState(true);

    useEffect(() => {
        if(id === 'mm'){
            setFundOpen(false)
        }
    }, [])

    const depositClicked = async () => {
        props.deposit(id);
    }

    const withdrawClicked = async () => {
        props.withdraw(id);
    }

    let dollar;
    let percent;
    if(id === 'mm'){
        dollar = ''
        percent = '%'
    } else if(id === 'index'){
        dollar = '$';
        percent = '';
    } else if(id === 'farm'){
        dollar = '';
        percent = '%';
    }

    let depositSection;
    if(props.account){
        depositSection = (
        <div className='deposit-section'>
  
            <div className="deposit-withdrawal" id={`${id}-deposit-withdrawal`}>
                <button className='button' onClick={depositClicked}>Deposit</button>
                <button className='button' onClick={withdrawClicked}>Withdraw</button>
            </div>
            
        </div>
        )
    } else {
        depositSection = (
            <div className='deposit-withdrawal' id={`${id}-deposit-withdrawal`}>
                <Connection />
            </div>
        )
    }

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }); 

    // @dev when how to buy is clicked, pop-up a video that walks through, stay on the same page

    return( 
        <div className='fund' id={id}>
            {fundOpen && <FundOpen
               
            />}
            <p className='fund-title' onClick={() => props.onClick(id)} >BlackBit {props.title}</p>
            <p className='fund-return' id={`${id}-fund-return`} >{props.measurment} <span className='fund-return-percent'>{dollar}{(props.returns).toFixed(2)}{percent}</span></p>
            <p className='more-info' id={`${id}-more-info`} onClick={() => props.onClick(id)}>More Info</p>
            <div className='fund-info' id={`${id}-fund-info`}>
                <p className='your-balance'>Your Balance:</p>
                <p className='balance'>{formatter.format(props.balance)}</p>
            </div>
            <div>{depositSection}</div>
            <p className='how-to-buy' onClick={() => props.buyToOpen()}>How to Buy?</p>
            <div id={`${id}-arrow`} >
                <button className='arrow' onClick={() => props.onClick(id)}> 
                    <p>{String.fromCharCode(8681)}</p>    
                </button>
            </div>
        </div>

    )
}