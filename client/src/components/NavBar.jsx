const NavBar = ({setView}) => {
  return (
    <div className="navbar-container">
      <div className="navbar-btn" onClick={() => setView("blog")}>
        <h4>Blog</h4>
      </div>
      <div className="navbar-btn" onClick={() => setView("about")}>
        <h4>About</h4>
      </div>
      <div className="navbar-btn" onClick={() => setView("contact")}>
        <h4>Contact</h4>
      </div>
      <div className="navbar-btn" onClick={() => setView("newPost")}>
        <h4>New Post</h4>
      </div>
    </div>
  );
};

export default NavBar;
