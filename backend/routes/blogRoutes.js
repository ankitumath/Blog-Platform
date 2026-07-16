const express = require("express");
const router = express.Router();

const {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
  getMyBlogs
} = require("../controllers/blogController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", getAllBlogs);
router.get("/my-blogs", protect, getMyBlogs);
router.get("/:id", getSingleBlog);
router.post("/", protect, createBlog);

router.put("/:id", protect, updateBlog);
router.delete("/:id", protect, deleteBlog);

module.exports = router;