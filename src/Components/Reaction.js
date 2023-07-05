import "./Reaction.scss";
import { useState, useEffect, useRef } from "react";

const Reaction = () => {
  const [reactionsVisible, setReactionsVisible] = useState(false);
  const [currentReaction, setCurrentReaction] = useState("");

  const handleReaction = (reaction) => {
    setCurrentReaction(reaction);
  };

  const reactionBubbleRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        reactionBubbleRef.current &&
        !reactionBubbleRef.current.contains(event.target)
      ) {
        setReactionsVisible(false);
        console.log("outside");
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="reaction-container">
      <div className="reaction-icon-wrap">
        <div
          className="reaction-icon"
          onClick={() =>
            reactionsVisible
              ? setReactionsVisible(false)
              : setReactionsVisible(true)
          }
        ></div>
        {currentReaction && (
          <div
            className="current-reaction"
            onClick={() => setCurrentReaction("")}
          >
            {currentReaction}
          </div>
        )}
      </div>

      <div
        className={`reaction-bubble ${reactionsVisible && "bubble-up"}`}
        ref={reactionBubbleRef}
      >
        <div
          className={`emoji ${reactionsVisible && "float"}`}
          onClick={() => handleReaction("👍")}
        >
          👍
        </div>
        <div
          className={`emoji ${reactionsVisible && "float"}`}
          onClick={() => handleReaction("❤️")}
        >
          ❤️
        </div>
        <div
          className={`emoji ${reactionsVisible && "float"}`}
          onClick={() => handleReaction("🙌")}
        >
          🙌
        </div>
        <div
          className={`emoji ${reactionsVisible && "float"}`}
          onClick={() => handleReaction("🎉")}
        >
          🎉
        </div>
      </div>
    </div>
  );
};

export default Reaction;
