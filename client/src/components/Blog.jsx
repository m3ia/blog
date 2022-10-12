import NavBar from "./NavBar";
import Post from "./Post";
import {useState} from "react";

const Blog = () => {
  const views = ["blog", "about", "contact", "newPost"];
  const [view, setView] = useState("blog");

  return (
    <>
      <NavBar setView={setView} />
      <div className="container">
        {view === "blog" && (
          <>
            <div className="title-bar-div">
              <h1>Meia's Consumerisms</h1>
              <h2>THIS IS THE SUBHEADER & HELLOO TO THE SECOND LINE</h2>
            </div>
            <div className="posts-container">
              <Post />
              <Post />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Blog;
