import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AppContext } from "../../App";
import { getDocById } from "../../utils";
import Post from "../../components/post/Post";
import { useParams } from "react-router";

function PostDetails() {
  const {postId} = useParams()
  const [post, setpost] = useState(null);
  const getDoc = async () => {
    const doc = await getDocById(postId);
    const newDoc = {...doc.data(), id : doc.id, isSinglePost : true}
    setpost(newDoc);
  };
  useEffect(() => {
    setpost(getDoc());
  }, []);

  return <>
  {post && <Post post={post} />}
  </>;
}

export default PostDetails;
