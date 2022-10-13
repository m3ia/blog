import {useState} from "react";
const NewPostForm = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    subheading: "",
    content: "",
    photo: "",
  });

  const addNewPost = () => {};
  return (
    <div className="new-post-form-div">
      <h1>Add a New Post</h1>
      <div className="post-form-input-divs">
        <input
          className="post-title-input"
          type="text"
          id="add-title"
          placeholder="Add a title"
          onChange={(e) => {
            setNewPost((prev) => ({
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
          placeholder="Add a subheading"
          onChange={(e) => {
            setNewPost((prev) => ({
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
          placeholder="Add content here"
          onChange={(e) => {
            setNewPost((prev) => ({
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
          placeholder="Photo URL"
          onChange={(e) => {
            setNewPost((prev) => ({
              ...prev,
              photo: e.target.value,
            }));
          }}
        />
      </div>
      <div className="form-submit-btn">
        <h3>Submit</h3>
      </div>
    </div>
  );
};

export default NewPostForm;
