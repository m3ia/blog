import NavBar from "./NavBar";
import Post from "./Post";

const Blog = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="title-bar-div">
          <h1>Meia's Consumerisms</h1>
          <h2>THIS IS THE SUBHEADER & HELLOO TO THE SECOND LINE</h2>
        </div>
        <div className="posts-container">
          <Post />
          <Post />
        </div>
      </div>
    </>
  );
};

export default Blog;
