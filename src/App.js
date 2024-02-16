import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

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
      setPosts(response.data);
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
      <input
        className="input"
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchInput}
      />
      {filteredPosts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
    </>
  );
}

export default App;
