import { useState } from 'react'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js';

function App() {
    
  const [amount, setAmount]=useState(0);//for amount
  const [from, setFrom]=useState("usd")//for amount in from lable
  const [to, setTo]=useState("inr")//for amount in to lable
  const [convertedAmount, setConvertedAmount]=useState(0);

  const currencyInfo=useCurrencyInfo(from)//he re it returns data which is object and we have to show user keys so 
  //we will use Object.keys()
  const currencyNameOptions=Object.keys(currencyInfo);


  //swap
  const swap=()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert=()=>(setConvertedAmount(amount*currencyInfo[to]));//here we are doing that whatever value user passed is multiply by the values of to's key so that we will have answer



  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url(https://wallpaperaccess.com/full/3048907.jpg)`,
              
          }}
      >
          <div className="w-full flex flex-wrap justify-around items-center">
          <img className='h-auto w-96 rounded-2xl mx-auto ' src="https://images.pexels.com/photos/230490/pexels-photo-230490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="w-80 h-auto mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              currencyOption={currencyNameOptions}
                              onCurrencyChange={(currency)=>setFrom(currency)}
                              onAmountChange={(amount)=>setAmount(amount)}
                              selectCurrency={from}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOption={currencyNameOptions}
                              onCurrencyChange={(currency)=>setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase() +' to '+ to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App
