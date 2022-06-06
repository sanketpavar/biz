import React, { useContext } from "react";
import Post from "../../components/post/Post";
import { AppContext } from "../../App";
import CreatePost from "../../components/createPost/CreatePost";

function Feed() {
  const { postStore } = useContext(AppContext);
  return (
    <div>
      <CreatePost />
      {postStore &&
        postStore.map((post) => {
          return <Post post={post} />;
        })}
    </div>
  );
}

export default Feed;
