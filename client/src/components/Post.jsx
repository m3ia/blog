import format from "date-fns/format";
import {Interweave} from "interweave";

const Post = ({post, setView, setEditedPost}) => {
  const clickEdit = (post) => {
    setView("editPost");
    setEditedPost(post);
  };
  return (
    <div className="post-div">
      <div className="post-date">
        <h3>{format(new Date(post.datePosted), "eeee, MM/dd/yyyy")}</h3>
      </div>
      <div className="post-body">
        <div className="post-header">
          <h2>{post.title}</h2>
        </div>
        <div className="post-content">
          <p className="img-p">
            {post.photo && (
              <img className="post-img" src={post.photo} alt="post"></img>
            )}
          </p>
          <div>
            <div className="subheading">{post.subheading}</div>
            <br />

            <Interweave content={post.content} />
          </div>
          <div className="post-btns">
            <span className="material-symbols-outlined">delete</span>
            <span
              className="material-symbols-outlined"
              onClick={() => clickEdit(post)}
              post={post}>
              edit
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
