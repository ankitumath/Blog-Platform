const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
} = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createBlog);
router.get("/", protect, getAllBlogs);

module.exports = router;