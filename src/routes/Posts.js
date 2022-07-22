import React from "react";
import { useState, useEffect } from "react";
import { fetchAllPosts, deletePost } from "../api";
import SearchBar from "../components/SearchBar";
import SendMessage from "../components/SendMessage";
import "./Posts.css";

const Posts = ({ token, username }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const fetchedPosts = await fetchAllPosts();
      setPosts(fetchedPosts);
    };
    getPosts();
  }, []);

  return (
    <>
      <SearchBar posts={posts} setPosts={setPosts} />
      {posts.map((post) => {
        const postID = post._id;
        return (
          <div className="postcard" key={post._id}>
            <h2>{post.title}</h2>
            <div className="info" >
              <h3 >Price: {post.price}</h3>
              {post.location === "[On Request]" ? <h3 >post location must be requested!</h3>: <h3 >{post.location}</h3>}
              {post.willDeliver ? <h3 >Will Deliver</h3> : <h3 >Cannot Deliver</h3>}
            </div>
            <h4>Description:</h4>
            <h3>{post.description}</h3>
            {post.author.username !== username ? (
              token ? (
                <SendMessage post={post} token={token} postID={postID}/>
              ) : null
            ) : null}
            {post.author.username === username ? (
              <button
                className="button"
                type="button"
                onClick={async () => {
                  deletePost(token, postID, posts, setPosts);
                }}
              >
                Delete
              </button>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default Posts;