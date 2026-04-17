import { createRoot } from 'react-dom/client'
import { useState } from 'react'


function formatValue(value) {
  const porcentage = (value * 100).toFixed(2)
  const formated = porcentage.padStart(5, '0') + '%';
  return formated;
}

function Result({random}) {
  const [text, color] = random < 0.49 ? ['You win!', 'green'] : ['You lose...', 'red'];

  return (
      <>
        <h2 style={{background: color}}>{text}</h2>
        <p>{formatValue(random)}</p>
      </>
    )
}

function Gambling() {
  const [random, setRandom] = useState(Math.random());
  return (
    <>
      <Result random={random}/>
      <button onClick={() => setRandom(Math.random())}>Re-roll</button>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <h1>Let's go Gambling!</h1>
    <Gambling />
    <p className='advisement'>
      * You have ~50% of chance to win (and, obviously 50% to lose).<br/>
      Good luck!
    </p>
  </>
);