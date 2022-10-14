const EditPostForm = ({getPosts, editedPost, setEditedPost, setView}) => {
  // const [newPost, setNewPost] = useState({
  //   title: "",
  //   subheading: "",
  //   content: "",
  //   photo: "",
  // });

  // edited
  const submitEditedPost = async (e) => {
    e.preventDefault();

    const postId = editedPost.id;
    setEditedPost((prev) => setEditedPost({...prev, id: postId}));

    await fetch(`http://localhost:8080/editPost/${postId}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedPost),
    });

    console.log("edited post", editedPost);
    getPosts();
    setView("blog");
    setEditedPost({
      id: "",
      title: "",
      subheading: "",
      content: "",
      photo: "",
    });
  };

  return (
    <div className="new-post-form-div">
      <h1>Edit Post</h1>
      <div className="post-form-input-divs">
        <input
          className="post-title-input"
          type="text"
          id="add-title"
          value={editedPost.title}
          onChange={(e) => {
            setEditedPost((prev) => ({
              ...prev,
              title: e.target.value,
            }));
          }}
        />
      </div>
      <div className="post-form-input-divs">
        <input
          className="post-subheading-input"
          type="text"
          id="add-subheading"
          value={editedPost.subheading}
          onChange={(e) => {
            setEditedPost((prev) => ({
              ...prev,
              subheading: e.target.value,
            }));
          }}
        />
      </div>
      <div className="post-form-input-divs">
        <textarea
          className="post-content-textarea"
          type="text"
          id="add-content"
          value={editedPost.content}
          onChange={(e) => {
            setEditedPost((prev) => ({
              ...prev,
              content: e.target.value,
            }));
          }}
        />
      </div>
      <div className="post-form-input-divs">
        <input
          className="post-photo-input"
          type="text"
          id="add-photo"
          value={editedPost.photo}
          onChange={(e) => {
            setEditedPost((prev) => ({
              ...prev,
              photo: e.target.value,
            }));
          }}
        />
      </div>
      <div className="form-submit-btn" onClick={(e) => submitEditedPost(e)}>
        <h3>Submit</h3>
      </div>
    </div>
  );
};

export default EditPostForm;
