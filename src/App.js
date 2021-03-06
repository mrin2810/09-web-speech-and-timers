/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { useSpeechSynthesis } from 'react-speech-kit';

import TimerSlot from './components/TimerSlot';
import './App.css';

export default function App() {
  const [timers, setTimers] = useState([
    { time: 3, text: 'I'},
    { time: 5, text: 'love'},
    { time: 7, text: 'you'},
  ]);

  const { seconds, isRunning, start, reset } = useStopwatch({ autoStart: false });
  const { speak, speaking, supported, cancel } = useSpeechSynthesis();
  
  function handleBlur(index, time, text) {
    const newTimers = [...timers];
    newTimers[index].time = time;
    newTimers[index].text = text;

    setTimers(newTimers);
  }

  function addTimer() {
    const newTimer = { time: 100, text: 'yoo' }

    setTimers(timers => [...timers, newTimer]);
  }
  
  useEffect(() => {
    const foundTimer = timers.find(timer => timer.time === seconds);
    if (foundTimer) speak({ text: foundTimer.text});

    // check to see if seconds > last time
    if(seconds > timers[timers.length - 1].time) reset(0, false);
  }, [seconds, timers])

  if(!supported) {
    return <div>Your browser is not supported! Sorry!</div>
  }

  return (
    <div className="app">
      <h2>Talk the Talk</h2>

      <div className="timers">
        {/* timers go here */}
        {timers.map((timer, index) =>  (
            <TimerSlot key={index} index={index} timer={timer} handleBlur={handleBlur}/>
        ))}

        <button className="add-button" onClick={addTimer}>Add</button>
      </div>

      {/* seconds */}
      <h2>{seconds}</h2>

      {/* buttons */}
      <div className="buttons">
        {!isRunning && <button className="start-button" onClick={start}>Start</button>}
        {isRunning && <button className="stop-button" onClick={() => reset(0, false)}>Stop</button>}

        {speaking && <p>I am speaking...</p>}
      </div>
    </div>
  );
}