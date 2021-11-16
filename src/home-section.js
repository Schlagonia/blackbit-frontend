import React, { useState, useEffect } from 'react';


export default function HomeSection(props) {
    
    const id = props.id;

    const sections = {
        TR: {
            title: 'Your Total Return:',
            body: (
                <div id='personal-return-graph'>

                </div>
        )},
        WB: {
            title: 'Why BlackBit?',
            body: (
                <p>As with any new technology there are significant risks with investing in and using relatively new products. BlackBit helps you get exposure to this exciting new asset class while minimizing as many of those risks as possible. All while being as easy as the traditional mutual fund and ETF investments you may be familiar with. 
                <br></br><br></br>
                BlackBit does the hard work of researching, vetting and investing in the everchanging DeFi world. And with only one click you can reap all of the benefits without the time, energy and money associated with becoming an expert in the often confusing and ever-shifting DeFi landscape.
                </p>
            )},
        HIW: {
            title: "How it Works",
            body: (
                <div>
                    <p>BlackBit works just like a mutual fund or ETF in the tradtional markets. We aggregate investors funds and use our expertise and scale in order to generate higher returns than what most investors could do on their own.
                        <br></br><br></br>
                        Simply connect an Ethereum wallet, choose from one of our three strategies, desposit funds and let BlackBit work for you! 
                    </p>
                </div>
            )
        },
        DT: {
            title: 'What dat Token Do?',
            body: (
            <p>The BlackBit is a family of actively managed invest funds built on and investing in the new exciting world of decentralized finance of ‘DeFi’. BlackBit is the easiest way for anyone from anywhere in the world to gain a diversified exposure to part of the world’s fastest growing asset class. Simply choose one of our three funds based on your risk tolerance, connect your Ethereum wallet and become a shareholder in the future of finance!</p>
        )},
    }

    return(
        <div className='home-section' id={sections[id].title}>
            <p className='home-section-title'>{sections[id].title}</p>
            <div className="home-section-body">
                {sections[id].body}
            </div>
        </div>
    )
}