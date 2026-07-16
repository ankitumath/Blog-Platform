import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  getBlogById,
  updateBlog,
} from "../../services/blogService";

import { useAuth } from "../../context/AuthContext";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blog = await getBlogById(id);

        setFormData({
          title: blog.title,
          content: blog.content,
        });

      } catch (error) {
        console.log(error);
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await updateBlog(id, formData, token);

      alert("Blog Updated Successfully");

      navigate(`/blog/${id}`);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">

      <h1 className="text-3xl font-bold mb-6">
        Edit Blog
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          rows="10"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Update Blog
        </button>

      </form>

    </div>
  );
};

export default EditBlog;