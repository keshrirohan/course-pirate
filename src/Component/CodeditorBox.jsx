import React, { useEffect, useState } from "react";

const CodeditorBox = () => {
  const initialText = "Welcome to Course Pirate!";
  const adventureText = "Let's start your adventure.";
  const [inputText, setInputText] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showInput, setShowInput] = useState(false); // State to control input visibility

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputText); // Handle the input submission here
    setInputText(""); // Clear the input after submission
  };

  useEffect(() => {
    let typingTimeout;

    if (!isTyping && displayedText.length < initialText.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(initialText.slice(0, displayedText.length + 1));
      }, 100); // Adjust typing speed here
    } else if (displayedText.length === initialText.length) {
      if (!isTyping) {
        setTimeout(() => {
          setDisplayedText((prev) => prev + "\n" + adventureText);
          setIsTyping(true); // Start typing the adventure text
        }, 1000); // Wait 1 second before typing the adventure text
      }
    } else if (
      isTyping &&
      displayedText.length < initialText.length + adventureText.length + 1
    ) {
      typingTimeout = setTimeout(() => {
        const nextChar =
          adventureText[displayedText.length - initialText.length - 1]; // Adjust index for adventure text
        setDisplayedText((prev) => prev + nextChar);
      }, 100); // Adjust typing speed here

      if (displayedText.length === initialText.length + adventureText.length) {
        setShowInput(true); // Show the input field after the adventure text is fully typed
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isTyping, initialText, adventureText]);

  return (
    <div className="bg-blue-800 text-white p-6 rounded-md shadow-lg max-w-md mx-auto mt-10">
      <pre className="font-mono whitespace-pre-wrap">
        {displayedText || "Typing..."}
      </pre>

      {/* Show the input only after the text is fully typed */}
      {showInput && (
        <form onSubmit={handleSubmit} className="mt-4">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type your text here..."
            className="p-2 w-full border border-blue-600 rounded-md bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CodeditorBox;
