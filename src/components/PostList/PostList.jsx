// PostList.js
import React from "react";

function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <p>NAME: {post.name}</p>
          <p>EMAIL: {post.email}</p>
          <p>PHONE: {post.phone}</p>
        </div>
      ))}
    </>
  );
}

export default PostList;
