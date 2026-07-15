const Blog = require("../models/Blog");

// Create Blog
const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Validation
    if (!title || !content) {
      return res.status(400).json({
        message: "Title and Content are required",
      });
    }

    // Create Blog
    const blog = await Blog.create({
      title,
      content,
      author: req.user._id,
    });

    res.status(201).json({
      message: "Blog created successfully",
      blog,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getAllBlogs = async (req, res) => {
  try {

    const blogs = await Blog.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(blogs);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

module.exports = {
    createBlog,
    getAllBlogs,
};