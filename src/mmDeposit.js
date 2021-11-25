import React, { useState, useEffect } from "react";
import Popup from "./popup";


const MMDeposit = props => {

    const [ token, setToken ] = useState('');
    const [ value, setValue ] = useState(0);
    const [ buyToOpen, setbuyToOpen] = useState(false)
    const [ balance, setBalance ] = useState(0);
    const [ showInput, setShowInput ] = useState(false);
    const [ showDeposit, setShowDeposit ] = useState(false);
    const [ approving, setApproving ] = useState(false)
    const [ depositing, setDepositing ] = useState(false)
    const { mm, web3, account, Dai } = props;

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
          try{
          setShowInput(true);
          const weiBal = await Dai.methods.balance(account).call();
  
          const bal = web3.utils.fromWei(weiBal);

          setBalance(bal)

          } catch(error){
            console.log(error)
          }

        } else if(token == 'USDC'){
          setShowInput(true);
          setBalance(0);
        }
      })();
    }, [token]);

    useEffect(() => {
      if(value > 0){
        setShowDeposit(true);
      } else {
        setShowDeposit(false);
      }
    }, [value])

    const approveDai = async (toDeposit) => {

      const approval = await Dai.methods.allowance(account, mm.options.address).call();

      const approved = new web3.utils.BN(approval);
      
      const diff = toDeposit.sub(approved).toString();

      if(diff > 0) {
        setApproving(true)
        try {
         await Dai.methods.approve(mm.options.address, diff).send({ from: account }).on('transactionHash', (hash)=> {
            return true;
          });

        } catch(error) {
          alert('Approval Failed');
          console.log(error);
        }
      }
      setApproving(false)
      return true;
    }
    
    const deposit = async () => {
        if(value == '0') return;

        if(token == 'DAI'){

          const deposit = web3.utils.toWei(value);
          const toDeposit = new web3.utils.toBN(deposit);

          const approved = await approveDai(toDeposit);

          if(approved) {
            setDepositing(true)


            try {
              const txn = await mm.methods.depositDai(toDeposit.toString()).send({ from: account }).on('transactionHash', (hash) => {

              mm.once('deposited', {}, 

                console.log('done'),
                props.confirmTransaction('deposited', value, hash),
                props.handleClose()  
              );
            });
    
            }catch (error) {
              console.log(error);
            }

          }
    
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
        {approving && <Popup 
          content={
            <>
              <p>Awaiting approval of {token}</p>
              <br></br>
              <p>Please follow the prompts in your wallet</p>
              <br></br>
            </>
          }
          handleClose={() => setApproving(false)}
        />}
        {depositing && <Popup 
          content={
            <>
              <p>Awaiting Deposit of {formatter.format(value)} {token}</p>
              <br></br>
              <p>Please follow the prompts in your wallet</p>
              <br></br>
            </>
          }
          handleClose={() => setDepositing(false)}
        />}
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        <p className='popup-title'>Deposit into the BlackBit Money Market!</p>
        <div className='deposit-section'>
            <div className="dropdown">
                    <label htmlFor="coin-choice">Select Coin: </label>
                        <select className="coin-name" id="coin-names" onChange={e => setToken(e.target.value)}>
                            <option className='dropdown-coin' value=""></option>
                            <option className='dropdown-coin' value="DAI">DAI</option>
                            <option className='dropdown-coin' value="USDC">USDC</option>
                        </select>
            </div>
            { showInput ? 
            <div>
                <p> Your {token} Balance: {formatter.format(balance)}</p>
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
          { showDeposit ?
          <div className="popup-deposit-withdrawal">
            <button className='button' onClick={deposit}>Deposit</button>
          </div>
          : <></>} 
          <p className='how-to-buy' onClick={() => setbuyToOpen(true)}>How to Buy?</p>
      </div>
    </div>  
  );
};

export default MMDeposit