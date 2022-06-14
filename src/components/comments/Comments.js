import React, { useContext, useState } from "react";
import { AppContext } from "../../App";

function Comments(props) {
  const { post } = props;
  const [showCommentBox, setshowCommentBox] = useState(false);
  const [commentIndex, setcommentIndex] = useState(null);
  const { addComment } = useContext(AppContext);
  const [commentText, setcommentText] = useState("");

  const sendComment = (replyTo) => {
    const data = { commentText, id: post.id, comments: post.comments, replyTo, isSinglePost : post.isSinglePost };
    setcommentText("");
    addComment(data);
    setshowCommentBox(false);
  };

  const handleCommentBox = (e, index) => {
    console.log(e);

    // if (index === e.target.index) {
    // setreply(""); //!EASTER EGG : off
    setshowCommentBox(true);
    setcommentIndex(index);

    // }
  };

  const handleReply = (e) => {
    setcommentText(e.target.value);
  };
  return (
    <>
      <div className="allcomments flex flex-col">
        {post.comments &&
          post.comments.map((comm, index) => {
            return (
              <div
                key={index}
                className="comment flex flex-col border bg-gray-200 rounded-lg p-2 mb-2"
              >
                <span className="commentuserid font-bold">
                  {">>"}Anonymous (ID : {comm.commentuserid}) &nbsp;
                  {/* <span className="timestamp text-xs">2hr ago</span> */}
                </span>

                <span className="commentreply">
                  {comm.replyTo && (
                    <span className="text-red-500">@{comm.replyTo} </span>
                  )}
                  {comm.commentreply}{" "}
                </span>
                <span>
                  <button
                    className="text-red-500"
                    onClick={(e) => {
                      handleCommentBox(e, index);
                    }}
                  >
                    Reply
                  </button>
                </span>

                {showCommentBox && index === commentIndex && (
                  <div
                    className="commentBox"
                    // style={{ display: showCommentBox ? `block` : "none" }}
                  >
                    <input
                      type="text"
                      className="border border-black "
                      value={commentText}
                      onChange={(e) => handleReply(e)}
                    />
                    <button
                      className="border border-black p-1"
                      onClick={() => sendComment(comm.commentuserid)}
                    >
                      reply
                    </button>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Comments;
