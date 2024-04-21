import React, { useState, useRef } from 'react';
import './LoveLetter.css';
import audioFile from './kushi.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };

  return (
    <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
      <div className="flap"></div>
      <div className="body"></div>
      <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
       Pattuu,<br />
       First of all, thanks for coming into my life and making it more beautiful.<br /> 
       Your presence make me feel divine and happier.<br />
       Talking with you and sharing things is the best part of my day.<br />
       I still remember the first day i met you with an shine in your face and i did not expect that shine would be the one in my life.<br />
       This is the first birthday that we celebrate as an couple , I wish i could have been there but still I know you will feel my presence there as i do here.<br />
       Again, Wishing you a delightful day filled with joy and a wonderful year filled with success & love.<br />
       I wish we will celebrate more and more birthday's like this.<br />
       I'm thinking of you every minute and will come to you soon.....<br />
       Miss you so much and love you di pattuu.......... <br />
      </div>
      <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
    </div>
  );
};

export default LoveLetter;
