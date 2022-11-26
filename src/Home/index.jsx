import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <>
      <div className="home">
        {postList.map((post) => (
          <div className="get-post" key={post.id}>
            {isAuth && post.author.id === auth.currentUser.uid && (
              <div
                className="delete"
                onClick={() => {
                  // eslint-disable-next-line no-restricted-globals
                  const checkDel = confirm("Do you really want to delete ?");
                  if (checkDel) {
                    deletePost(post.id);
                  }
                }}
              >
                <RiDeleteBin6Fill title="Delete Post" />
              </div>
            )}
            <h1>{post.title}</h1>
            <div className="get-post-text">
              <p>{post.postText}</p>
            </div>
            <h3>{post.author.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
