import { useState } from "react";
import UserInput from "./components/UserInput";
import { calculateInvestmentResults } from "./util/investment";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  function handleUserInput(name, value) {
    // Convert only if the value is not an empty string
    const parsedValue = value.trim() === "" ? 0 : Number(value);
  
    setUserInput((prevInput) => ({
      ...prevInput,
      [name]: parsedValue
    }));
  }
  

  return (
    <>
      <UserInput onUserInput={handleUserInput} />
      <Result results={calculateInvestmentResults(userInput)} />
      <pre>{JSON.stringify(userInput, null, 2)}</pre>
    </>
  );
}

export default App;