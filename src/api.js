const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function getPosts() {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data;
}

async function getPostById(id) {
  const res = await axios.get(`${BASE_URL}/posts/${id}`);
  return res.data;
}

async function createPost(data) {
  const res = await axios.post(`${BASE_URL}/posts`, data);
  return res.data;
}

async function updatePost(id, data) {
  const res = await axios.put(`${BASE_URL}/posts/${id}`, data);
  return res.data;
}

async function deletePost(id) {
  const res = await axios.delete(`${BASE_URL}/posts/${id}`);
  return res.status;
}

module.exports = { getPosts, getPostById, createPost, updatePost, deletePost };