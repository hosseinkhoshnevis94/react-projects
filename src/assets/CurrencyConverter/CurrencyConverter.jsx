
import { useEffect, useState } from "react";
import currencySign from './utils/currencySign'




export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function convert() {
    try{
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        setConverted(data.rates[toCur]);
      } catch(err){
         setError('Error,Try again!')
      }finally{
        setIsLoading(false)
      }
      
      }
  useEffect(
    function () {
        convert()
        if (fromCur === toCur) return setConverted(amount);
        convert();
      },
      [amount, fromCur, toCur]
  );

  if(error) return <p style={{ color: "red" }}>{error}</p>

  
  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
        />
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        disabled={isLoading}
        >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        disabled={isLoading}
        >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {isLoading ? <p>loading...</p> :  <p>
        {amount}{currencySign(fromCur)}  = {converted} {currencySign(toCur)}
      </p>}
    </div>
  );
}
