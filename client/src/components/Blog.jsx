import NavBar from "./NavBar";
import Post from "./Post";
import About from "./About";
import Contact from "./Contact";
import NewPostForm from "./NewPostForm";
import EditPostForm from "./EditPostForm";
import {useState, useEffect} from "react";

const Blog = () => {
  const [view, setView] = useState("blog");
  // const views = ["blog", "about", "contact", "newPost"];
  const [posts, setPosts] = useState([]);
  const [editedPost, setEditedPost] = useState({
    id: "",
    title: "",
    subheading: "",
    content: "",
    photo: "",
  });
  const getPosts = async () => {
    await fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
        let postsArr = [];
        for (let item of res) {
          let postObject = {
            id: item.id,
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
  // Get Posts
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <NavBar setView={setView} />
      <div className="container">
        <div className="title-bar-div">
          <h1>GWOAT</h1>
          <h2>Greatest Women of All Time</h2>
        </div>
        <div className="interactive-view">
          {view === "blog" && (
            <>
              <div className="posts-container">
                {posts.map((post, ind) => {
                  return (
                    <Post
                      key={ind}
                      post={post}
                      setView={setView}
                      setEditedPost={setEditedPost}
                      getPosts={getPosts}
                    />
                  );
                })}
              </div>
            </>
          )}
          {view === "about" && (
            <>
              <About />
            </>
          )}
          {view === "contact" && (
            <>
              <Contact />
            </>
          )}
          {view === "newPost" && (
            <NewPostForm setView={setView} getPosts={getPosts} />
          )}
          {view === "editPost" && (
            <EditPostForm
              getPosts={getPosts}
              editedPost={editedPost}
              setEditedPost={setEditedPost}
              setView={setView}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Blog;
