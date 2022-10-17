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
  // const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [firstItemInd, setFirstItemInd] = useState(0);
  // const [lastItemInd, setLastItemInd] = useState(firstItemInd + itemsPerPage);

  // Pagination click handlers
  const nextPage = () => {
    setFirstItemInd(firstItemInd + itemsPerPage);
    // setLastItemInd(lastItemInd + itemsPerPage);
    window.scrollTo(0, 0);
  };

  const previousPage = () => {
    setFirstItemInd(firstItemInd - itemsPerPage);
    // setLastItemInd(lastItemInd - itemsPerPage);
    window.scrollTo(0, 0);
  };

  const updateItemsPerPage = (num) => {
    setItemsPerPage(num);
    setFirstItemInd(0);
    window.scrollTo(0, 0);
  };

  const getPosts = async () => {
    await fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((res) => {
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
                {posts
                  .map((post, ind) => {
                    return (
                      <Post
                        key={ind}
                        post={post}
                        setView={setView}
                        setEditedPost={setEditedPost}
                        getPosts={getPosts}
                      />
                    );
                  })
                  .slice(firstItemInd, firstItemInd + itemsPerPage)}
                <div className="pagination-btns">
                  {firstItemInd + itemsPerPage + itemsPerPage <=
                  posts.length ? (
                    <div className="pagination-btn" onClick={nextPage}>
                      Next Page
                    </div>
                  ) : null}
                  <div className="items-num-options">
                    Show
                    <div
                      className="items-num-option"
                      onClick={() => updateItemsPerPage(5)}>
                      5
                    </div>
                    |
                    <div
                      className="items-num-option"
                      onClick={() => updateItemsPerPage(10)}>
                      10
                    </div>
                    |
                    <div
                      className="items-num-option"
                      onClick={() => updateItemsPerPage(15)}>
                      15
                    </div>
                  </div>
                  {firstItemInd >= itemsPerPage ? (
                    <div className="pagination-btn" onClick={previousPage}>
                      Previous Page
                    </div>
                  ) : null}
                </div>
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
