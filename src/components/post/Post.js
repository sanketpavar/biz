import React from "react";
import Comments from "../comments/Comments";
import Header from "../postheader/Header";
import Votes from "../votes/Votes";

function Post(props) {
  const { post } = props;

  return (
    <div
      key={post.id}
      className="flex flex-row border max-w-5xl m-5 rounded-lg p-1 bg-white text-sm "
      // className="flex max-w-5xl m-5  text-sm "
    >
      {/* <div className="flex bg-white rounded-lg p-1"> */}
      {/* VOTES - START */}
      <Votes post={post} />
      {/* VOTES - END */}

      <div className="content flex flex-col p-2 w-full">
        {/* HEADER - START*/}
        <Header post={post} />
        {/* HEADER - END */}

        {/* COMMENTS - START */}
        <Comments post={post} />
        {/* COMMENTS - END */}
      </div>
      {/* </div> */}
    </div>
  );
}

export default Post;
