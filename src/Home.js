import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h4>Home</h4>
      <Link to="/posts">Go to Posts</Link>
    </div>
  );
};

export default Home;
