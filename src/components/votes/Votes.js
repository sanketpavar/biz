import React, { useContext } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { AppContext } from "../../App";
function Votes(props) {
  const { post } = props;
  const { votesHandler } = useContext(AppContext);

  const handleVotes = (e) => {
    const voteData = {
      id: post.id,
      currentVotes: post.votes,
      voteType: e.target.id,
    };
    votesHandler(voteData);
  };
  return (
    <>
      <div className="votes flex flex-col items-center p-2">
        <span
          className="upvote cursor-pointer"
          id="UPVOTE"
          onClick={(e) => handleVotes(e)}
        >
          <AiOutlineArrowUp style={{ pointerEvents: "none" }} />
        </span>
        <span className="votecount">{post.votes || "0"}</span>
        <span
          className="downvote cursor-pointer"
          id="DOWNVOTE"
          onClick={(e) => handleVotes(e)}
        >
          <AiOutlineArrowDown style={{ pointerEvents: "none" }} />
        </span>
      </div>
    </>
  );
}

export default Votes;
