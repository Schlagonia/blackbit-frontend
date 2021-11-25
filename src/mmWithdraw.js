import React, { useState, useEffect } from "react";
import Popup from "./popup";


const MMWithdraw = props => {

    const { mm, web3, account, Dai, mmBalance } = props;
    const [ token, setToken ] = useState('');
    const [ value, setValue ] = useState();
    const [ buyToOpen, setbuyToOpen] = useState(false)
    const [ balance, setBalance ] = useState(mmBalance);
    const [ showInput, setShowInput ] = useState(false);
    const [ showWithdraw, setShowWithdraw ] = useState(false);
    const [ withdrawing, setWithdrawing ] = useState(false);

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    useEffect(() => {
      if(token == ''){
        setShowInput(false);
      } 

      (async () => {
        if(token == 'DAI'){
          setShowInput(true);
          
        } else if(token == 'USDC'){
          setShowInput(true);
        }
      })();
    }, [token]);

    useEffect(() => {
      if(value > 0){
        setShowWithdraw(true);
      } else {
        setShowWithdraw(false);
      }
    }, [value])

    
    const withdraw = async () => {
        if(value == '0') return;

        setWithdrawing(true)

        if(token == 'DAI'){
    
            const withdraw = web3.utils.toWei(value);
            const toWithdraw = new web3.utils.toBN(withdraw);

    
            await mm.methods.withdrawal(toWithdraw.toString()).send({ from: account }).on('transactionHash', (hash) => {
              mm.once('withdrew', {}, 

                console.log('done'),
                props.confirmTransaction('deposited', value, hash),
                props.handleClose()

          
             );
    
            })
          }
      }
      
  return (
    <div className="popup-box">
      {buyToOpen && <Popup
           content={
              <>
                <h3>How To Buy!!!!</h3>
              </>
            }
            handleClose={() => setbuyToOpen(false)}
            />}
        {withdrawing && <Popup 
          content={
            <>
              <p>Awaiting Withdraw of {formatter.format(value)} {token}</p>
              <br></br>
              <p>Please follow the prompts in your wallet</p>
              <br></br>
            </>
          }
          handleClose={() => setWithdrawing(false)}
        />}
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <p className='popup-title'>Withdraw from the BlackBit Money Market!</p>
        <div className='deposit-section'>
            <div className="dropdown">
                    <label htmlfor="coin-choice">Select Coin: </label>
                        <select className="coin-name" id="coin-names" onChange={e => setToken(e.target.value)}>
                            <option className='dropdown-coin' value=""></option>
                            <option className='dropdown-coin' value="DAI">DAI</option>
                            <option className='dropdown-coin' value="USDC">USDC</option>
                        </select>
            </div>
            { showInput ? 
            <div>
                <p> Your Balance: {formatter.format(balance)}</p>
                <div className='input-div'>
                    <p className='input-amount'>Enter Amount:</p>
                  <div className='input-max'>
                  <p>$</p>
                    <input 
                        type="number" 
                        className="input"
                        value={value}
                        placeholder='0.00'
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <h4 onClick={() => setValue(balance)} className='max'>Max</h4>
                    </div>
                  </div>
              </div>
           : <></> }
          </div>
          { showWithdraw ?
          <div className="popup-deposit-withdrawal">
            <button className='button' onClick={withdraw}>Withdraw</button>
          </div>
          : <></>} 
          <p className='how-to-buy' onClick={() => setbuyToOpen(true)}>How to Buy?</p>
      </div>
    </div>  
  );
};

export default MMWithdraw