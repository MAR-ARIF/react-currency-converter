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
    <div className="w-full h-screen bg-cover bg-no-repeat"
    style={{backgroundImage: `url(${backgroundImage})`}}>
      <div>
        <form 
        onSubmit={(e) => {
          e.preventDefault();
          convert();
          
        }}>
          <div>
            <InputBox
              label="From"
              amount={amount}
              selectCurrency={from}
              currencyOptions={options}
              onCurrencyChange={setFrom}
              onAmountChange={setAmount}
            />
          </div>
          <div>
            <button
            type="button"
            onClick={swap}>
              swap
            </button>
          </div>
          <div>
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
          type="submit">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>

        </form>
      </div>

    </div>
  )
}

export default App
