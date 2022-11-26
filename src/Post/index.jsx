import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
const Post = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  let navigate = useNavigate();

  const postsCollectionRef = collection(db, "posts");
  const createPost = async () => {
    await addDoc(postsCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);
  return (
    <>
      <form className="post">
        <h3>Create A Post</h3>
        <label>
          Title:
          <input
            type="text"
            placeholder="Title..."
            maxLength={47}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Post:
          <textarea
            name="post"
            placeholder="Post..."
            onChange={(e) => setPostText(e.target.value)}
          ></textarea>
        </label>
        <button
          type={"submit"}
          onClick={(e) => {
            e.preventDefault();
            createPost();
          }}
        >
          Submit Post
        </button>
      </form>
    </>
  );
};

export default Post;
