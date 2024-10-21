import { useState } from 'react'

const Statistics = (props) => {

  return (
    <tbody>
      <tr><StatisticLine text="good" value ={props.good} /></tr>      
      <tr><StatisticLine text="neutral" value ={props.neutral} /></tr>
      <tr><StatisticLine text="bad" value ={props.bad} /></tr>
      <tr><StatisticLine text="all" value ={props.all} /></tr>
      <tr><StatisticLine text="average" value ={props.average} /></tr>
      <tr><StatisticLine text="positive" value ={props.positive} /></tr>
    </tbody>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}{text === "positive" ? " %" : ""}</td>
    </>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>  
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad;
  const average = (good+neutral+bad)/3;
  const positive = (all>0) ? (good/all)*100 : 0;

  const handleGoodClick = () => {
    const updateGood = good + 1;
    setGood(updateGood);
  };
  const handleNeutralClick = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
  };
  const handleBadClick = () => {
    const updateBad = bad + 1;
    setBad(updateBad);
  };

  return (
    <div>      
      <h1>give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick}text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />      
      <h1>statistics</h1>
      {all>0 &&
        <table>
          <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive}/>
        </table>  
      }
      {all<=0 && 
        <p>No feedback given</p>
      }         
    </div>
  )
}

export default App