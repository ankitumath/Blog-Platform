import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">

      <h2 className="text-2xl font-bold">
        {blog.title}
      </h2>

      <p className="text-gray-500 mt-2">
        By {blog.author?.name || "Unknown"}
      </p>

      <p className="text-sm text-gray-400">
        {new Date(blog.createdAt).toLocaleDateString()}
      </p>

      <p className="mt-4 text-gray-700">
        {blog.content.substring(0, 150)}...
      </p>

      <Link
        to={`/blog/${blog._id}`}
        className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Read More
      </Link>

    </div>
  );
};

export default BlogCard;