import React, { useState } from 'react';
import './App.css';
import TimerSlot from './components/TimerSlot';

export default function App() {
  const [timers, setTimers] = useState([
    { time: 3, text: 'I'},
    { time: 5, text: 'love'},
    { time: 7, text: 'you'},
  ]);
  return (
    <div className="app">
      <h2>Talk the Talk</h2>

      <div className="timers">
        {/* timers go here */}
        {timers.map((timer, index) =>  (
            <TimerSlot key={index} index={index} timer={timer} />
        ))}

        <button className="add-button">Add</button>
      </div>

      {/* seconds */}
      <h2>0</h2>

      {/* buttons */}
      <div className="buttons">
        <button className="start-button">Start</button>
        <button className="stop-button">Stop</button>
      </div>
    </div>
  );
}