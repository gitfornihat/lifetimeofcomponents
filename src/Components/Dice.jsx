import React, { useState } from 'react';
import zer1 from './images/zer1.jpg';
import zer2 from './images/zer2.jpg';
import zer3 from './images/zer3.jpg';
import zer4 from './images/zer4.jpg';
import zer5 from './images/zer5.jpg';
import zer6 from './images/zer6.jpg';

const Dice = () => {
  const [currentFace, setCurrentFace] = useState(1);

  const faces = [zer1, zer2, zer3, zer4, zer5, zer6];

  const rollDice = () => {
    const randomFace = Math.floor(Math.random() * 6) + 1;
    setCurrentFace(randomFace);
  };

  return (
    <div className="dice" onClick={rollDice}>
      <img src={faces[currentFace - 1]} alt={`Zer ${currentFace}`} />
    </div>
  );
};

export default Dice;
