import React, { useState, useEffect } from 'react';
import FundContract from "./contracts/Fund.json";
import BBMMContract from "./contracts/BBMM.json";
import DAIContract from "./contracts/DAI.json"
import getWeb3 from "./getWeb3";
import Header from './header';
import Footer from './footer';
import HomeSection from './home-section.js';
import FundSection from './fundSection';
import FAQ from './faq';
import Popup from './popup';
import MMDeposit from './mmDeposit';
import MMWithdraw from "./mmWithdraw";

import "./App.css";

const sections = ['TR', 'HIW','WB', 'DT'];


function App(props) {


    const [ web3, setWeb3 ] = useState(null)
    const [ mm, setMm] = useState(null)
    const [ bbmm, setBbmm] = useState(null)
    const [ Dai, setDai] = useState(null)
    const [ account, setAccount] = useState(null)
    const [ mmReturn, setMmReturn ] = useState(8.57)
    const [ mmBalance, setMmBalance ] = useState(0.00)
    const [ indexNav, setIndexNav ] = useState(10.00)
    const [ indexBalance, setIndexBalance ] = useState(0.00)
    const [ farmReturn, setFarmReturn ] = useState(0)
    const [ farmBalance, setFarmBalance ] = useState(0.00)
    const [ divider, setDivider ] = useState(null)
    const [ loading, setLoading ] = useState(true)
    const [ faq, setFaq ] = useState(false)
    const [ popupOpen, setPopupOpen ] = useState(false)
    const [ orderType, setOrderType ] = useState('')
    const [ orderAmount, setOrderAmount ] = useState(0)
    const [ orderHash, setOrderHash ] = useState(null)
    const [ mmDepositOpen, setMmDepositOpen ] = useState(false)
    const [ mmWithdrawOpen, setMmWithdrawOpen ] = useState(false)


  useEffect(() => {

    async function getBlockchainData() {
      console.log('loading data')
    try {
      // Get network provider and web3 instance.
      const Web3 = await getWeb3();
      setWeb3(Web3)
      console.log('got web3')

      // Get the contract instance.
      const networkId = await Web3.eth.net.getId();

      const bbmmDeployedNetwork = BBMMContract.networks[networkId];
      const BBMM = new Web3.eth.Contract(
        BBMMContract.abi,
        bbmmDeployedNetwork && bbmmDeployedNetwork.address,
      );
      console.log(BBMM.options.address)

      const fundDeployedNetwork = FundContract.networks[networkId];
      const MM = new Web3.eth.Contract(
        FundContract.abi,
        fundDeployedNetwork && fundDeployedNetwork.address,
      );

      console.log(MM.options.address)

      const daiDeployedNetwork = DAIContract.networks[networkId];
      const DAI = new Web3.eth.Contract(
        DAIContract.abi,
        daiDeployedNetwork && daiDeployedNetwork.address,
      );
      console.log(DAI.options.address)

      setBbmm(BBMM)
      setMm(MM)
      setDai(DAI)

      // Use web3 to get the user's accounts.
      const accounts = await Web3.eth.getAccounts();
      if(accounts[0]) {
        console.log('got account')
        setAccount(accounts[0])

        const bbmmBalance = new Web3.utils.BN( await BBMM.methods.balance(accounts[0]).call());
        console.log(bbmmBalance)
        const pps = new Web3.utils.BN( await MM.methods.PPS().call());
      
        const divider = new Web3.utils.BN(1000)
        const mmWeiBalance = bbmmBalance.mul(pps).div(divider);
      
        const mmBalance = Web3.utils.fromWei(mmWeiBalance.toString());

        setDivider(divider)
        setMmBalance(mmBalance)

      }
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error(error);
    }
  }
    getBlockchainData();

  }, []);

  const checkBalance = async () => {
    console.log('checking balance')
    const bbmmBalance = new web3.utils.BN( await bbmm.methods.balance(account).call());
    const pps = new web3.utils.BN( await mm.methods.PPS().call());
    
    const mmWeiBalance = bbmmBalance.mul(pps).div(divider);
    
    const Balance = web3.utils.fromWei(mmWeiBalance.toString());
    console.log(Balance)
    setMmBalance(Balance)
    console.log('set balance')
  }

  const togglePopup =() => {
    setPopupOpen(!popupOpen)
  }

  const depositPopUp = (fund) => {
    if(fund == 'mm'){
      setMmDepositOpen(true)
    }
    else if (fund == 'index'){
      
    } else if(fund == 'farm'){

    }
  }

  const WithdrawPopUp = (fund) => {
    if(fund == 'mm'){
      setMmWithdrawOpen(true)
    }
    else if (fund == 'index'){
      
    } else if(fund == 'farm'){

    }
  }

  const confirmTransaction =(orderType, orderAmount, orderHash) => {
    setOrderType(orderType)
    setOrderAmount(orderAmount)
    setOrderHash(orderHash)
    setPopupOpen(true)
    checkBalance();
  }


    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  

    const homeSections = sections.map((section) =>
      <HomeSection key={section} id={section}/>
    )

    const home = (
      <div>
        {popupOpen && <Popup
          content={
            <>
              <p>Congragulations!</p>
              <br></br>
              <p>You succesfully {orderType} {formatter.format(orderAmount)}!</p>
              <br></br>
              <p>You should now see  reflected in your wallet and BlackBit account balance.</p>
              <br></br>
              <p>View your transaction on <a href={`https://etherscan.io/tx/${orderHash}`} target='_blank' > EtherScan {orderHash}</a></p>
              <br></br>
              <p className='popup-link' onClick={() => setFaq( true ) }>FAQ</p>
            </>
          }
          handleClose={togglePopup}
        />}
        {mmDepositOpen && <MMDeposit
          web3={web3}
          mm={mm}
          account={account}
          Dai={Dai}
          confirmTransaction={confirmTransaction}
          handleClose={() => setMmDepositOpen( false )}
      />}
        {mmWithdrawOpen && <MMWithdraw
          web3={web3}
          mm={mm}
          account={account}
          Dai={Dai}
          mmBalance={mmBalance}
          confirmTransaction={confirmTransaction}
          handleClose={() => setMmWithdrawOpen( false ) }
      />}
        <div className='sticky-cointainer'>
          <Header 
            account={account}
            //walletConnected={walletConnected}
          />
          <div className="banner" id='banner' >
            <p className='learn' onClick={() => setFaq( true )}>Learn How BlackBit Works</p> 
          </div>
          <FundSection 
            account={account}
            mmReturn={mmReturn}
            mmBalance={mmBalance}
            indexNav={indexNav}
            indexBalance={indexBalance}
            farmReturn={farmReturn}
            farmBalance={farmBalance}
            loading={loading}
            //walletConnected={walletConnected}
            deposit={depositPopUp}
            withdraw={WithdrawPopUp}
          />
        </div>
        <div>{homeSections}</div>
    </div>
    )

    const learn = (
      <div>
        <Header 
          account={account}
          //connected={connected}
        />
        <FAQ />
      </div>
    )

    const display = faq ? learn : home ;

    return (
      <div className="App">
        {display}
        <Footer 
          faqClick={() => setFaq(true) }
        />
      </div>
  );
  
}
export default App;
