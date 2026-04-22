import useCurrencyInfo from "./hooks/useCurrencyInfo"
function App() {
  const data = useCurrencyInfo("usd");
  console.log(data);

  return (
    <>
      
    </>
  )
}

export default App
