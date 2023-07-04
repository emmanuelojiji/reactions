import "./Comment.scss";
import Reaction from "./Reaction";

const Comment = () => {
  return (
    <div className="comment">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
      <Reaction/>
    </div>
  );
};

export default Comment;
