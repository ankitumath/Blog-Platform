import api from "./api";

export const getAllBlogs = async () => {
  const response = await api.get("/blogs");
  return response.data;
};

export const createBlog = async (blogData, token) => {
  const response = await api.post("/blogs", blogData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};