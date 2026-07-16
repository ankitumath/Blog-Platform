import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { getMyBlogs } from "../../services/blogService";

const Dashboard = () => {
  const { token } = useAuth();

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getMyBlogs(token);
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, [token]);

  return (
    <div className="max-w-5xl mx-auto mt-10">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          My Blog Dashboard
        </h1>

        <Link
          to="/create-blog"
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Create Blog
        </Link>

      </div>

      {blogs.length === 0 ? (
        <h2>No Blogs Found</h2>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-lg p-5 mb-5"
          >
            <h2 className="text-2xl font-semibold">
              {blog.title}
            </h2>

            <p className="mt-2">
              {blog.content.substring(0, 150)}...
            </p>

            <div className="mt-4">
              <Link
                to={`/blog/${blog._id}`}
                className="text-blue-600"
              >
                View Blog →
              </Link>
            </div>
          </div>
        ))
      )}

    </div>
  );
};

export default Dashboard;