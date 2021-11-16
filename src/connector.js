// App.js
import React from 'react'
import { useWallet, UseWalletProvider } from 'use-wallet'

function Connection(props) {
  const wallet = useWallet()
  const blockNumber = wallet.getBlockNumber()

  const connect = async (e) => {  

    await wallet.connect();
    window.location.reload();
  }

  return (
    <>
      {wallet.account ? (
        <button className='button'>
          {wallet.account}
        </button>
      ) : (
        
          <button className='button' id='wallet' onClick={connect}>Connect Wallet</button>
        
      )}
    </>
  )
}

// Wrap everything in <UseWalletProvider />
export default () => (
    <UseWalletProvider
      chainId={1337}
      connectors={{
        // This is how connectors get configured
        provided: { provider: window.cleanEthereum },
      }}
    >
      <Connection />
    </UseWalletProvider>
  )