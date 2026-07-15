const Comment = require("../models/Comment");
const Blog = require("../models/Blog");

// Add Comment
const addComment = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({
        message: "Comment is required",
      });
    }

    // Check if blog exists
    const blog = await Blog.findById(req.params.blogId);

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    const comment = await Comment.create({
      text,
      blogId: req.params.blogId,
      userId: req.user._id,
    });

    res.status(201).json({
      message: "Comment added successfully",
      comment,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getComments = async (req, res) => {
  try {

    const comments = await Comment.find({
      blogId: req.params.blogId,
    })
      .populate("userId", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(comments);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

const deleteComment = async (req, res) => {
  try {

    const comment = await Comment.findById(req.params.id);

    if (!comment) {
      return res.status(404).json({
        message: "Comment not found",
      });
    }

    if (comment.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({
        message: "Not authorized",
      });
    }

    await comment.deleteOne();

    res.status(200).json({
      message: "Comment deleted successfully",
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });

  }
};

module.exports = {
  addComment,
  getComments,
  deleteComment,
};  