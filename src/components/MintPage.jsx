import React, { useState } from 'react'
import Nft from "../assets/nft.gif"

const MintPage = () => {
  const [mintValue, setMintValue] = useState(0)

  const increaseMintValue = () => {
    setMintValue((prev) => prev + 1)
  }

  const decreaseMintValue = () => {
    if(mintValue !== 0){
      setMintValue((prev) => prev - 1)
    }
  }
  return (
    <div id='mint' className='md:h-screen flex flex-col md:flex-row justify-center items-center gap-3 py-36 md:py-0'>
      <div className='basis-1/2'>
          <img src={Nft} alt="" className='rounded-xl'  />
      </div>
      <div className='basis-1/2'>
      <div className="text-center pb-6 space-y-4">
          <div className="text-2xl md:text-3xl">
            <span className="font-bold text-secondary">Total Supply: </span>
            <span className='text-primary'>5000</span>
          </div>
          <div className="text-2xl md:text-3xl">
            <span className="font-bold text-secondary">Current Price: </span>
            <span className='text-primary'>0.01 ETH</span>
          </div>
          <div className='flex flex-row items-center justify-center gap-6 pt-4 pb-4'>
            <button onClick={decreaseMintValue} className='p-1 text-3xl font-bold text-black rounded-xl px-6 bg-gray-400 hover:bg-secondary transition-all ease-in-out active:text-2xl '>-</button>
            <div className={mintValue !== 0 ? 'text-4xl font-bold text-primary' : 'text-3xl font-bold'}>{mintValue}</div>
            <button onClick={increaseMintValue} className='p-1 text-3xl font-bold text-black rounded-xl px-6 bg-gray-400 hover:bg-secondary transition-all ease-in-out active:text-2xl '>+</button>
          </div>
          <div>
            <button className="px-12 py-3 bg-primary hover:text-2xl transition-all ease-in-out font-bold uppercase rounded-lg text-xl">
              Mint Nft
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MintPage