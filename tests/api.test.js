const axios = require("axios");
const {
  getPosts, getPostById,
  createPost, updatePost, deletePost,
} = require("../src/api");

jest.mock("axios");

describe("API Tests", () => {
  test("GET - fetches all posts", async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, title: "Post One" }] });
    const posts = await getPosts();
    expect(Array.isArray(posts)).toBe(true);
    expect(posts[0]).toHaveProperty("title");
  });

  test("GET - fetches post by ID", async () => {
    axios.get.mockResolvedValue({ data: { id: 1, title: "Post One" } });
    const post = await getPostById(1);
    expect(post).toHaveProperty("id", 1);
  });

  test("POST - creates a new post", async () => {
    const newPost = { title: "New Post", body: "Content", userId: 1 };
    axios.post.mockResolvedValue({ data: { id: 101, ...newPost } });
    const result = await createPost(newPost);
    expect(result).toHaveProperty("id", 101);
    expect(result.title).toBe("New Post");
  });

  test("PUT - updates an existing post", async () => {
    const updated = { title: "Updated Title" };
    axios.put.mockResolvedValue({ data: { id: 1, ...updated } });
    const result = await updatePost(1, updated);
    expect(result.title).toBe("Updated Title");
  });

  test("DELETE - deletes a post and returns 200", async () => {
    axios.delete.mockResolvedValue({ status: 200 });
    const status = await deletePost(1);
    expect(status).toBe(200);
  });
});