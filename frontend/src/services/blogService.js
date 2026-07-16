import api from "./api";

// Get All Blogs
export const getAllBlogs = async () => {
  const response = await api.get("/blogs");
  return response.data;
};

// Create Blog
export const createBlog = async (blogData, token) => {
  const response = await api.post("/blogs", blogData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Get Single Blog
export const getBlogById = async (id) => {
  const response = await api.get(`/blogs/${id}`);
  return response.data;
};

// Get Comments
export const getComments = async (blogId) => {
  const response = await api.get(`/comments/${blogId}`);
  return response.data;
};

// Add Comment
export const addComment = async (blogId, text, token) => {
  const response = await api.post(
    `/comments/${blogId}`,
    { text },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// Delete Comment
export const deleteComment = async (commentId, token) => {
  const response = await api.delete(`/comments/${commentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Update Blog
export const updateBlog = async (id, blogData, token) => {
  const response = await api.put(`/blogs/${id}`, blogData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Delete Blog
export const deleteBlog = async (id, token) => {
  const response = await api.delete(`/blogs/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Get My Blogs
export const getMyBlogs = async (token) => {
  const response = await api.get("/blogs/myblogs", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};