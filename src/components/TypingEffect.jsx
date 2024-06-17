import { useState, useEffect } from 'react';
import PropTypes from "prop-types";

const TypingEffect = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false); // Track if typing is finished

  useEffect(() => {
    if (currentIndex < text.length) {
      const interval = setInterval(() => {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100); // Adjust typing speed here (milliseconds)

      return () => clearInterval(interval); // Clean up interval
    } else {
      setIsFinished(true); // Set typing finished flag
    }
  }, [currentIndex, text]);

  // Display the full text once typing is finished
  if (isFinished) {
    return <span className={className}>{text}</span>;
  }

  // Display currently typing text
  return <span className={className}>{displayText}</span>;
};

TypingEffect.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TypingEffect;
