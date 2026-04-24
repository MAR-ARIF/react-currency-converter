import useCurrencyInfo from "./hooks/useCurrencyInfo"
import InputBox from "./components/InputBox";
import { useState } from "react";
import backgroundImage from "./assets/background-image.webp"
function App() {
  const [amount , setAmount] = useState(0);
  const[convertedAmount, setConvertedAmount] = useState(0);
  const [from , setFrom] = useState("usd");
  const [to, setTo] = useState("bdt");
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])

  }
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  

  return (
    <div className="w-full h-screen bg-cover bg-no-repeat flex justify-center items-center"
    style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="w-full max-w-md mx-auto bg-white/30 backdrop-blur-sm rounded-lg p-5 border border-white/20">
        <form 
        onSubmit={(e) => {
          e.preventDefault();
          convert();
          
        }}>
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              selectCurrency={from}
              currencyOptions={options}
              onCurrencyChange={setFrom}
              onAmountChange={setAmount}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
            bg-blue-500 text-white px-4 py-1 rounded-md border-2 border-white
            transition duration-200
            hover:bg-blue-600
            active:scale-95"
            type="button"
            onClick={swap}>
              swap
            </button>
          </div>
          <div className="w-full mb-4 mt-1">
            <InputBox
              label="To"
              amountDisabled
              amount={convertedAmount}
              selectCurrency={to}
              currencyOptions={options}
              onCurrencyChange={setTo}
            />
          </div>
          <button
          className="w-full text-white bg-blue-500 py-3 px-4 rounded-lg"
          type="submit">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>

        </form>
      </div>

    </div>
  )
}

export default App
