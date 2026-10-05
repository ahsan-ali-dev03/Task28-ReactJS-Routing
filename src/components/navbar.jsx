import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <Link to="/">MyBlog</Link>
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </nav>

      <div className="auth-links">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/signup" className="signup-btn">
          Signup
        </Link>
      </div>

    </header>
  );
}

export default Navbar;