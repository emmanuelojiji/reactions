import "./Reaction.scss";
import { useState } from "react";

const Reaction = () => {
  const [reactionsVisible, setReactionsVisible] = useState(false);
  const [currentReaction, setCurrentReaction] = useState("");

  const handleReaction = (reaction) => {
    setCurrentReaction(reaction);
  };

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
          <div className="current-reaction" onClick={() => setCurrentReaction("") }>{currentReaction}</div>
        )}
      </div>

      <div className={`reaction-bubble ${reactionsVisible && "bubble-up"}`}>
        <div className="emoji" onClick={() => handleReaction("👍")}>
          👍
        </div>
        <div className="emoji" onClick={() => handleReaction("❤️")}>
          ❤️
        </div>
        <div className="emoji" onClick={() => handleReaction("🙌")}>
          🙌
        </div>
        <div className="emoji" onClick={() => handleReaction("🎉")}>
          🎉
        </div>
      </div>
    </div>
  );
};

export default Reaction;
