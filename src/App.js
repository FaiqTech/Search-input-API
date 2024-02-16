// App.js
import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Input from "./components/Input/Input";
import PostList from "./components/PostList/PostList";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [posts, setPosts] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const Base_Url = "https://jsonplaceholder.typicode.com/users";

  const getPosts = async () => {
    try {
      const response = await axios.get(Base_Url);
      const modifiedData = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
      }));
      setPosts(modifiedData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <Input value={searchInput} onChange={handleChange} />
      <PostList posts={filteredPosts} />
    </>
  );
}

export default App;
