import React, { useState, useContext } from "react";
import { AppContext } from "../../App";
import Image from "react-image-enlarger";

function Header(props) {
  const { post } = props;
  const { addComment } = useContext(AppContext);
  const [commentText, setcommentText] = useState("");
  const [zoomed, setZoomed] = React.useState(false);

  const sendComment = () => {
    const data = { commentText, id: post.id, comments: post.comments };
    setcommentText("");
    addComment(data);
  };
  return (
    <>
      <div className="postheader flex flex-row pb-3 flex-wrap">
        <span className="image">
          <Image
            className="object-contain max-h-32 max-w-xl"
            src={post.imageUrl}
            alt=""
            zoomed={zoomed}
            onClick={() => setZoomed(true)}
            onRequestClose={() => setZoomed(false)}
          />
        </span>
        <div className="caption flex flex-col p-4">
          <div className="userid font-bold">
            {">>"}Anonymous (ID :{" "}
            <span className="text-red-500">{post.authorId}</span>) &nbsp;
            {/* <span className="timestamp text-xs">2hr ago</span> */}
          </div>

          <span className="title ">{post.title}</span>
          <span className="reply flex gap-5">
            <input
              type="text"
              className="border border-black"
              value={commentText}
              
              onChange={(e) => setcommentText(e.target.value)}
            />
            <button
              className="border border-black p-1"
              onClick={() => sendComment()}
            >
              reply
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Header;
