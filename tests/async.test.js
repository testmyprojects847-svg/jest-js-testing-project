const { fetchUserById, getUserEmail } = require("../src/asyncService");

describe("Async Tests - Promises", () => {
  test("fetches user by ID using .then()", () => {
    return fetchUserById(1).then((user) => {
      expect(user).toHaveProperty("id", 1);
      expect(user).toHaveProperty("name");
    });
  });

  test("rejects with error when ID is missing", () => {
    return expect(fetchUserById(null)).rejects.toThrow("ID is required");
  });
});

describe("Async Tests - async/await", () => {
  test("fetches user successfully", async () => {
    const user = await fetchUserById(5);
    expect(user.email).toBe("ahmed@example.com");
  });

  test("throws error for user not found", async () => {
    await expect(fetchUserById(99)).rejects.toThrow("User not found");
  });

  test("gets user email correctly", async () => {
    const email = await getUserEmail(3);
    expect(email).toBe("ahmed@example.com");
  });
});