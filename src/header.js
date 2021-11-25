import React, { useState, useEffect } from 'react';
import './blackbit-tiles-black.css';
import Connection from './connector.js'

export default function Header(props) {

    let wallet;
    if(props.account){
        wallet = <button className='button' id='wallet' >{props.account}</button>;
    } else {
        wallet = <Connection />;
    }
    return(
        <div className="header" id='header'>
            <p className='bb' onClick={() => window.location.reload()}>BB</p>
            <div className="header-titles">
            <p className="title" onClick={() => window.location.reload() }>BlackBit Capital</p>
            <p className='intro'>Actively Managed DeFi Funds, Built on DeFi!</p>
            </div>
                {wallet}
        </div>
    )
}