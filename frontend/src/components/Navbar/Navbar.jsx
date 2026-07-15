import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { token, user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <Link to="/" className="text-2xl font-bold">
          Blog Platform
        </Link>

        <div className="flex items-center gap-5">

          <Link to="/">Home</Link>

          {token ? (
            <>
              <Link to="/dashboard">Dashboard</Link>

              <Link to="/create-blog">
  Create Blog
</Link>

              <Link to="/profile">
                {user?.name || "Profile"}
              </Link>

             <button
  onClick={() => {
    logout();
    navigate("/");
  }}
  className="bg-red-500 px-4 py-2 rounded"
>
  Logout
</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>

              <Link to="/register">Register</Link>
            </>
          )}

        </div>

      </div>
    </nav>
  );
};

export default Navbar;