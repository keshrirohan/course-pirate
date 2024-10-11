import React, { useEffect, useState } from "react";

const AnimatedText = () => {
  const textArray = [
    "Embark on the Voyage of Learning: Where Every Discovery is a Treasure!",
    "Hoist the Flag of Education: Where Every Lesson Leads to New Horizons!",
    "Chart Your Course to Knowledge: Where Every Adventure Unlocks Potential!",
    "Sail into the Sea of Learning: Where Every Topic is a New Expedition!",
    "Unleash Your Curiosity: Where Every Question is a Key to Hidden Treasures!",
    "Navigate the Ocean of Wisdom: Where Every Lesson is a Wave of Discovery!",
    "Join the Crew of Knowledge Seekers: Where Every Idea is a Journey!",
  ];

  const [currentText, setCurrentText] = useState(textArray[0]);
  const [isErasing, setIsErasing] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeout;
    if (isErasing) {
      const newText = displayedText.slice(0, -1);
      setDisplayedText(newText);
      if (newText.length === 0) {
        setIsErasing(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }
      timeout = setTimeout(() => setDisplayedText(newText), 100);
    } else {
      if (displayedText.length < currentText.length) {
        timeout = setTimeout(
          () =>
            setDisplayedText(currentText.slice(0, displayedText.length + 1)),
          100
        );
      } else {
        timeout = setTimeout(() => setIsErasing(true), 2000);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedText, isErasing, currentText]);

  useEffect(() => {
    setCurrentText(textArray[textIndex]);
    setDisplayedText("");
  }, [textIndex]);

  return (
    <div className="flex justify-center items-center h-full">
      <h1 className="md:text-4xl text-2xl   text-center text-white  ">
        {displayedText}
      </h1>
    </div>
  );
};

export default AnimatedText;
