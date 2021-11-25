import React, { useState, useEffect } from 'react';
import Question from './question';



function FAQ(props) {
    
    
    const allQuestions = [
        {
            question: 'What is BlackBit',
            answer: <p>BlackBit is a family of actively managed invest funds built on and investing in the new exciting world of decentralized finance of ‘DeFi’. 
                <br></br><br></br>BlackBit is the easiest way for anyone from anywhere in the world to gain a diversified exposure to part of the world’s fastest growing asset class. 
                <br></br><br></br>Simply choose one of our three funds based on your risk tolerance, connect your Ethereum wallet and become a shareholder in the future of finance!</p>,
        },
        {
            question: 'What is DeFi',
            answer: <p>Decentralized finance of ‘DeFi’ for short is a new global financial system built on top of blockchains such as <a href="https://ethereum.org/en/" target="_blank">Ethereum</a> These protocols and systems have the potential to replace the legacy financial systems we rely on today with a better, faster cheaper system. One that is built on code and natively digital, global and open to anyone.</p>,
        },
        {
            question: 'Why invest in DeFi',
            answer: (<p>For all of the greatest innovations the only people that had the ability to be early investors were the wealthy and the well connected. Blockchain has changed that dynamic, and for the first time in history everyday investors can get access to many of the same early-stage opportunities as the wealthy. Crypto is the fastest growing technology innovation of all time and is open for anybody to take part and invest in.
            <br></br>
            <br></br>
            The greatest investment returns generally have come from early stage investing in transformative technologies. Bitcoin is the best example of the financial opportunities created by being an early adopter in new world changing innovation. 
            <br></br><br></br>
            DeFi brings togethor the scalability and network effects like what we have seen with social media and tech giants, while also generating cash flows and earnings in line with traditional financial institutions. While still in its early stages and thus still highly volatile, at BlackBit we believe the continued migration from the traditional financial markets to the open source, global decentralized markets will make DeFi one of the next greatest investment opportunities of all time.
            </p>)
        },
        {
            question: 'Why BlackBit',
            answer: (<p>As with any new technology there are significant risks with investing in and using relatively new products. BlackBit helps you get exposure to this exciting new asset class while minimizing as many of those risks as possible. All while being as easy as the traditional mutual fund and ETF investments you may be familiar with. 
                <br></br><br></br>
                BlackBit does the hard work of researching, vetting and investing in the everchanging DeFi world. And with only one click you can reap all of the benefits without the time, energy and money associated with becoming an expert in the often confusing and ever-shifting DeFi landscape.
                </p>)
        },
        {
            question: 'What are the risks',
            answer: (<p>While BlackBit’s goal is to diversify away as much of the risks as possible. As with any investment there are always risks. 
                <br></br><br></br>The main risks associated with using BlackBit are the same as any other DeFi protocol. Including smart contract failure/hacking, stable coin de-pegging, liquidity risk and volatility.
                <br></br><br></br>It’s always important to do your own research before making any investment decision.
                </p>)
        },
        {
            question: 'Who can invest',
            answer: (<p>The great part about being built on DeFi means that anyone from anywhere in the world can invest in DeFi. As long as you have a funded Ethereum wallet and the desire to invest in the future you can use BlackBit!</p>)
        },
        {
            question: 'When Can I deposit or Wihdrawal',
            answer: (<p>Whenever you want. There are no lockups or limits.</p>)
        },
        {
            question: 'How much does BlackBit charge',
            answer: (<p>All BlackBit funds currently charge a 1% annual management fee and a 10% performance fee.
                <br></br><br></br>All stated returns are post fees.
                </p>)
        },
        {
            question: 'Which fund is best',
            answer: (<p>Each fund has its own cost benefit. We have designed each fund to take on its own risk/reward structure. As with any investment the higher the expected return, generally means higher risk.
                <br></br><br></br>In general you can expect the Money Market to be the safest, the Farm’n Fund to be the most volatile and the DeFi Index to be in the middle.
                </p>)
        },
        {
            question: 'How do I deposit',
            answer: (<p></p>)
        },
        {
            question: 'How do I set up a Wallet',
            answer: (<p></p>)
        },
        {
            question: 'What is Gas',
            answer: (<p></p>)
        },
        {
            question: 'How do I withdrawal',
            answer: (<p></p>)
        },
        {
            question: 'Code Ser',
            answer: (<p></p>)
        }

    ]

    const questions = allQuestions.map((question) =>
        <Question 
            question={question.question} 
            answer={question.answer}
        />
      )
  
        return (
            <div>
                <div className="info-header">
                    <p className="info-header-title">Education Center</p>
                    <p className="info-header-text">Click any topic below to learn more!</p>
                </div>
                <div className="table-of-contents">
                    {questions}
                </div>
                <p className='info-header-text'>Dont see an answer to your question?
                <br></br>
                Reach out through <a style={{ textDecoration: 'underline', cursor: 'pointer', }} >email</a>. Or for a faster response post a question directly in our <a style={{ textDecoration: 'underline', cursor: 'pointer', }} >discord</a> channel.
                </p>
            </div>
    )
        
};

export default FAQ;
