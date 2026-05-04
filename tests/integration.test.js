const { sumArray, removeDuplicates } = require("../src/utils");
const { fetchUserById } = require("../src/asyncService");
const { getFormattedUser } = require("../src/userService");

describe("Integration Tests", () => {
  test("removes duplicates then sums the array", () => {
    const raw = [1, 2, 2, 3, 3, 4];
    const unique = removeDuplicates(raw);
    const total = sumArray(unique);
    expect(total).toBe(10);
  });

  test("fetches user and formats output correctly", async () => {
    const user = await fetchUserById(1);
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("email");

    const formatted = await getFormattedUser(1);
    expect(typeof formatted).toBe("string");
    expect(formatted).toContain("Name:");
    expect(formatted).toContain("Email:");
  });
});