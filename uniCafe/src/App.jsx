import { useState } from 'react'

const StatisticLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.postText}</td>
    </tr>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const Statistics = (props) => {
  let good = props.good, neutral = props.neutral, bad = props.bad
  let all = good + neutral + bad
  let avg = 0
  if (all != 0){
    avg = (good - bad) / all
  } else {
    return(
      <>No feedback given</>
    )
  }
  let pos = 0
  if (all != 0){
    pos = (good / all) * 100
  }
  return(
    <table>
      <tbody>
      <StatisticLine value={good} text='good' />
      <StatisticLine value={neutral} text='neutral' />
      <StatisticLine value={bad} text='bad' />
      <StatisticLine value={all} text='all' />
      <StatisticLine value={avg} text='average' />
      <StatisticLine value={pos} text='positive' postText='%' />
      </tbody>
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incVal = (stateArr) => {
    stateArr[1](stateArr[0]+1)
  }
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => incVal([good,setGood])} text='good' />
      <Button handleClick={() => incVal([neutral,setNeutral])} text='neutral' />
      <Button handleClick={() => incVal([bad,setBad])} text='bad' />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App