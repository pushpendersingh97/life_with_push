'use client';

import React, { useState, useEffect, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  const handleStart = () => {
    if (!isRunning) setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTime(0);
  };

  // Helper to format time
  const formatTime = (seconds: number) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div style={styles.container}>
      <h1>⏱️ Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <div>
        <button onClick={handleStart} className="px-4 py-2 bg-blue-500 mx-2 rounded-full text-white">
          Start
        </button>
        <button onClick={handleStop} className="px-4 py-2 bg-red-400 mx-2 rounded-full text-white">
          Stop
        </button>
        <button onClick={handleReset} className="px-4 py-2 border-blue-500 border-2 mx-2 rounded-full">
          Reset
        </button>
      </div>
    </div>
  );
};

const styles: { container: React.CSSProperties } = {
  container: { textAlign: 'center', fontFamily: 'sans-serif', marginTop: '50px' },
};

export default Stopwatch;
