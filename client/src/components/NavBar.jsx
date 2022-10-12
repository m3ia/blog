const NavBar = ({setView}) => {
  return (
    <div className="navbar-container">
      <div className="navbar-btn" onClick={() => setView("blog")}>
        <h2>Blog</h2>
      </div>
      <div className="navbar-btn" onClick={() => setView("about")}>
        <h2>About</h2>
      </div>
      <div className="navbar-btn" onClick={() => setView("contact")}>
        <h2>Contact</h2>
      </div>
      <div className="navbar-btn" onClick={() => setView("newPost")}>
        <h2>New Post</h2>
      </div>
    </div>
  );
};

export default NavBar;
