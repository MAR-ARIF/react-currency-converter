import { useId } from "react";

function InputBox({
    label,
    amountDisabled = false,
    amount,
    onAmountChange,
    selectCurrency = "usd",
    currencyDisabled = false,
    onCurrencyChange,
    currencyOptions = [],


}){
    

    const amountInputId = useId();
    return(
        <div className="bg-blue-100 flex">
            <div className="w-1/2 text-black/40">
                <label htmlFor={amountInputId} >
                    {label}
                </label>
                <input 
                    id={amountInputId}
                    type="number"
                    placeholder="amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 text-black/40">
                <p >Currency Type</p>
                <select
                 className="cursor-pointer"
                 value={selectCurrency}
                 disabled={currencyDisabled}
                 onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                 >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}


                 </select>

            </div>

        </div>
        

    );
}
export default InputBox