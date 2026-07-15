import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../services/blogService";
import { useAuth } from "../../context/AuthContext";

const CreateBlog = () => {
  const navigate = useNavigate();

  const { token } = useAuth();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await createBlog(formData, token);

      alert("Blog Created Successfully!");

console.log("Navigating to Home...");

navigate("/");

    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Failed to create blog");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-xl p-8">

      <h1 className="text-3xl font-bold mb-8">
        Create New Blog
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block mb-2 font-semibold">
            Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Enter blog title"
          />
        </div>

        <div>
          <label className="block mb-2 font-semibold">
            Content
          </label>

          <textarea
            name="content"
            rows="10"
            value={formData.content}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
            placeholder="Write your blog..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? "Creating..." : "Create Blog"}
        </button>

      </form>

    </div>
  );
};

export default CreateBlog;