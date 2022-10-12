import format from "date-fns/format";

const Post = ({post, ind}) => {
  return (
    <div className="post-div">
      <div className="post-date">
        <h3>{format(new Date(post.datePosted), "eeee, MM/dd/yyyy")}</h3>
      </div>
      <div className="post-body">
        <div className="post-header">
          <h2>{post.title}</h2>
          <h3>{post.subheading}</h3>
        </div>
        <div className="post-content">
          <p>
            <img className="post-img" src={post.photo} alt="post"></img>
          </p>
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
