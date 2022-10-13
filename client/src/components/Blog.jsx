import NavBar from "./NavBar";
import Post from "./Post";
import About from "./About";
import Contact from "./Contact";
import NewPostForm from "./NewPostForm";
import {useState, useEffect} from "react";

const Blog = () => {
  const [view, setView] = useState("blog");
  const views = ["blog", "about", "contact", "newPost"];
  const [posts, setPosts] = useState([]);

  // Get Posts
  useEffect(() => {
    const getPosts = async () => {
      await fetch("http://localhost:8080/posts")
        .then((res) => res.json())
        .then((res) => {
          console.log("res", res);
          let postsArr = [];
          for (let item of res) {
            let postObject = {
              title: item.title,
              photo: item.photo,
              content: item.content,
              likes: item.subheading,
              subheading: item.subheading,
              published: item.published,
              private: item.private,
              datePosted: item.date_posted,
              dateEdited: item.date_edited,
              dateCreated: item.date_created,
            };
            postsArr.push(postObject);
          }

          setPosts(postsArr);
        });
    };
    getPosts();
  }, []);
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
              {posts.map((post, ind) => {
                return <Post key={ind} post={post} ind={ind} />;
              })}
            </div>
          </>
        )}
        {view === "about" && (
          <>
            <div className="title-bar-div-alt">
              <h1>Meia's Consumerisms</h1>
              <h2>THIS IS THE SUBHEADER & HELLOO TO THE SECOND LINE</h2>
            </div>
            <About />
          </>
        )}
        {view === "contact" && (
          <>
            <div className="title-bar-div-alt">
              <h1>Meia's Consumerisms</h1>
              <h2>THIS IS THE SUBHEADER & HELLOO TO THE SECOND LINE</h2>
            </div>
            <Contact />
          </>
        )}
        {view === "newPost" && <NewPostForm />}
      </div>
    </>
  );
};

export default Blog;
