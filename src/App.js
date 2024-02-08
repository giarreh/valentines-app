import './App.css';
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

function App() {
  const [buttonPosition, setButtonPosition] = useState({ x: 40, y: 40 });
  const [fadeIn, setFadeIn] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [h1Text, setH1Text] = useState('Will you be my valentine?');

  const handleButtonHover = () => {
    const randomX = Math.random() * (window.innerWidth - 200);
    const randomY = Math.random() * (window.innerHeight - 50);
    setButtonPosition({ x: randomX, y: randomY });
  };
  const handleYesButtonClick = () => {
    console.log("CLICKED!");
    setH1Text('I love you!❤️');
    setShowConfetti(true);
  };
  const handleNoButtonClick = () => {
    console.log("CLICKED!");
    setH1Text('I still love you, but now im very sad 😢');
    setShowConfetti(false);
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeIn(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const noButtonStyle = {
    position: 'absolute',
    left: `${buttonPosition.x}px`,
    top: `${buttonPosition.y}px`,
    opacity: fadeIn ? 1 : 0,
    transition: 'opacity 1s ease-in-out, left 0.3s ease-in-out, top 0.3s ease-in-out'
  };
  

  return (
    <main>
      <h1 className='title'>Hello Kinja!❤️</h1>
      <div className='content'>
      <h1>{h1Text}</h1>
        <div className='buttons'>
          <div className='yesButton' onClick={handleYesButtonClick}>Yes</div>
          <div className='noButton' style={noButtonStyle} onMouseOver={handleButtonHover} onClick={handleNoButtonClick}>No</div>
        </div>
      </div>
      {showConfetti && <Confetti />}
    </main>
  );
}

export default App;
