import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  getBlogById,
  getComments,
  addComment,
  deleteComment,
} from "../../services/blogService";

import { useAuth } from "../../context/AuthContext";
import CommentCard from "../../components/CommentCard/CommentCard";
import { Link, useNavigate } from "react-router-dom";
import { deleteBlog } from "../../services/blogService";

const BlogDetails = () => {
const { id } = useParams();

const navigate = useNavigate();

const { user, token } = useAuth();

const [blog, setBlog] = useState(null);
const [comments, setComments] = useState([]);
const [text, setText] = useState("");
const [loading, setLoading] = useState(true);

useEffect(() => {
  const loadData = async () => {
    try {

      const blogData = await getBlogById(id);

      const commentData = await getComments(id);

      setBlog(blogData);

      setComments(commentData);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  };

  loadData();

}, [id]);

  if (loading) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  if (!blog) {
    return <h2 className="text-center mt-10">Blog Not Found</h2>;
  }
const handleComment = async () => {

  if (!text.trim()) return;

  try {

    await addComment(id, text, token);

    const updatedComments = await getComments(id);

    setComments(updatedComments);

    setText("");

  } catch (error) {

    console.error(error);

  }
};

const handleDelete = async (commentId) => {
  try {
    await deleteComment(commentId, token);

    const updatedComments = await getComments(id);

    setComments(updatedComments);

  } catch (error) {
    console.error(error);
  }
};

const handleDeleteBlog = async () => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this blog?"
  );

  if (!confirmDelete) return;

  try {
    await deleteBlog(blog._id, token);

    alert("Blog Deleted");

    navigate("/");

  } catch (error) {
    console.log(error);
  }
};

  return (
  <div className="max-w-4xl mx-auto mt-10 p-6">

    <h1 className="text-4xl font-bold">
      {blog.title}
    </h1>

    <p className="text-gray-500 mt-3">
      By {blog.author?.name}
    </p>

    <p className="text-sm text-gray-400">
      {new Date(blog.createdAt).toLocaleDateString()}
    </p>

    {user?._id === blog.author?._id && (
      <div className="flex gap-4 my-6">

        <Link
          to={`/edit-blog/${blog._id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>

        <button
          onClick={handleDeleteBlog}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>

      </div>
    )}

    <hr className="my-6" />

    <p className="leading-8 whitespace-pre-line">
      {blog.content}
    </p>

    {/* ---------- Comments Section ---------- */}

    <hr className="my-10" />

    <h2 className="text-3xl font-bold mb-6">
      Comments ({comments.length})
    </h2>

    {comments.map((comment) => (
      <CommentCard
        key={comment._id}
        comment={comment}
        onDelete={handleDelete}
      />
    ))}

    {/* ---------- Add Comment ---------- */}

    {token && (
      <div className="mt-8">

        <textarea
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full border rounded-lg p-3"
          placeholder="Write your comment..."
        />

        <button
          onClick={handleComment}
          className="bg-blue-600 text-white px-6 py-2 rounded mt-4"
        >
          Add Comment
        </button>

      </div>
    )}

  </div>
);
};

export default BlogDetails;