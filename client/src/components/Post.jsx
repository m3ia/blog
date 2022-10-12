const Post = ({post, ind}) => {
  return (
    <div className="post-div">
      <div className="post-date">{post.datePosted}</div>
      <div className="post-body">
        <div className="post-header">
          <h3>{post.title}</h3>
          <h4>{post.subheading}</h4>
        </div>
        <div className="post-content">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
