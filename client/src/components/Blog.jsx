import NavBar from "./NavBar";
import Post from "./Post";

const Blog = () => {
  return (
    <div className="container">
      <NavBar />
      <div className="title-bar-div">
        <h1>Meia's Title</h1>
        <h2>Meia's subheader</h2>
      </div>
      <div className="posts-container">
        <Post />
      </div>
    </div>
  );
};

export default Blog;
