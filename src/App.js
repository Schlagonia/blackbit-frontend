import React, { Component } from "react";
import FundContract from "./contracts/Fund.json";
import BBMMContract from "./contracts/BBMM.json";
import DAIContract from "./contracts/DAI.json";
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


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      web3: null,
      mm: null,
      bbmm: null,
      DAI: null,
      account: null,
      mmReturn: 8.57,
      mmBalance: 0.00,
      indexNav: 10.00,
      indexBalance: 0.00,
      farmReturn: 0,
      farmBalance: 0.00,
      divider: null,
      loading: true,
      faq: false,
      popupOpen: false,
      orderType: '',
      orderAmount: 0,
      orderHash: null,
      mmDepositOpen: false,
      mmWithdrawOpen: false,
    }
    this.checkBalance = this.checkBalance.bind(this)
  }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const account = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();

      const bbmmDeployedNetwork = BBMMContract.networks[networkId];
      const bbmm = new web3.eth.Contract(
        BBMMContract.abi,
        bbmmDeployedNetwork && bbmmDeployedNetwork.address,
      );

      const fundDeployedNetwork = FundContract.networks[networkId];
      const mm = new web3.eth.Contract(
        FundContract.abi,
        fundDeployedNetwork && fundDeployedNetwork.address,
      );

      const daiDeployedNetwork = DAIContract.networks[networkId];
      const DAI = new web3.eth.Contract(
        DAIContract.abi,
        daiDeployedNetwork && daiDeployedNetwork.address,
      );

      const bbmmBalance = new web3.utils.BN( await bbmm.methods.balanceOf(account[0]).call());
    
      const pps = new web3.utils.BN( await mm.methods.PPS().call());
      
      const divider = new web3.utils.BN(1000)
      const mmWeiBalance = bbmmBalance.mul(pps).div(divider);
      
      const mmBalance = web3.utils.fromWei(mmWeiBalance.toString());

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, account, mm, bbmm, DAI, mmBalance, divider });
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  checkBalance = async () => {
    const { bbmm, mm, web3, account, divider } = this.state;

    const bbmmBalance = new web3.utils.BN( await bbmm.methods.balanceOf(account[0]).call());
    const pps = new web3.utils.BN( await mm.methods.PPS().call());
    
    const mmWeiBalance = bbmmBalance.mul(pps).div(divider);
    
    const mmBalance = web3.utils.fromWei(mmWeiBalance.toString());

    this.setState({ mmBalance })
  }

  togglePopup =() => {
    this.setState({ popupOpen: !this.state.popupOpen})
  }

  depositPopUp = (fund) => {
    if(fund == 'mm'){
      this.setState({ mmDepositOpen: true })
    }
    else if (fund == 'index'){
      
    } else if(fund == 'farm'){

    }
  }

  WithdrawPopUp = (fund) => {
    if(fund == 'mm'){
      this.setState({ mmWithdrawOpen: true })
    }
    else if (fund == 'index'){
      
    } else if(fund == 'farm'){

    }
  }

  confirmTransaction =(orderType, orderAmount, orderHash) => {
    this.setState({ orderType, orderAmount, orderHash, popupOpen: true })
    this.checkBalance();
  }

  render() {

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  

    const homeSections = sections.map((section) =>
      <HomeSection key={section} id={section}/>
    )

    const home = (
      <div>
        {this.state.popupOpen && <Popup
          content={
            <>
              <p>Congragulations!</p>
              <br></br>
              <p>You succesfully {this.state.orderType} {formatter.format(this.state.orderAmount)}!</p>
              <br></br>
              <p>You should now see this reflected in your wallet and BlackBit account balance.</p>
              <br></br>
              <p>View your transaction on <a href={`https://etherscan.io/tx/${this.state.orderHash}`} target='_blank' > EtherScan {this.state.orderHash}</a></p>
              <br></br>
              <p className='popup-link' onClick={() => this.setState({ faq: true })}>FAQ</p>
            </>
          }
          handleClose={this.togglePopup}
        />}
        {this.state.mmDepositOpen && <MMDeposit
          web3={this.state.web3}
          mm={this.state.mm}
          account={this.state.account}
          DAI={this.state.DAI}
          confirmTransaction={this.confirmTransaction}
          handleClose={() => this.setState({ mmDepositOpen: false })}
      />}
        {this.state.mmWithdrawOpen && <MMWithdraw
          web3={this.state.web3}
          mm={this.state.mm}
          account={this.state.account}
          DAI={this.state.DAI}
          mmBalance={this.state.mmBalance}
          confirmTransaction={this.confirmTransaction}
          handleClose={() => this.setState({ mmWithdrawOpen: false })}
      />}
        <div className='sticky-cointainer'>
          <Header 
            account={this.state.account}
            walletConnected={this.walletConnected}
          />
          <div className="banner" id='banner' >
            <p className='learn' onClick={() => this.setState({ faq: true })}>Learn How BlackBit Works</p> 
          </div>
          <FundSection 
            account={this.state.account}
            mmReturn={this.state.mmReturn}
            mmBalance={this.state.mmBalance}
            indexNav={this.state.indexNav}
            indexBalance={this.state.indexBalance}
            farmReturn={this.state.farmReturn}
            farmBalance={this.state.farmBalance}
            loading={this.state.loading}
            walletConnected={this.walletConnected}
            deposit={this.depositPopUp}
            withdraw={this.WithdrawPopUp}
          />
        </div>
        <div>{homeSections}</div>
    </div>
    )

    const faq = (
      <div>
        <Header 
          account={this.state.account}
          connected={this.state.connected}
        />
        <FAQ />
      </div>
    )

    const display = this.state.faq ? faq : home ;

    return (
      <div className="App">
        {display}
        <Footer 
          faqClick={() => this.setState({ faq: true })}
        />
      </div>
  );
  }
}
export default App;
