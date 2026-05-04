const { sendWelcomeEmail } = require("../src/userService");

jest.mock("../src/asyncService", () => ({
  fetchUserById: jest.fn().mockResolvedValue({
    id: 1,
    name: "Mocked User",
    email: "mock@example.com",
  }),
}));

const { getFormattedUser } = require("../src/userService");

describe("Mocking - jest.fn()", () => {
  test("calls email function with correct args", () => {
    const mockEmailFn = jest.fn().mockReturnValue("Email sent!");
    const user = { name: "Sara", email: "sara@example.com" };

    const result = sendWelcomeEmail(mockEmailFn, user);

    expect(mockEmailFn).toHaveBeenCalledWith("sara@example.com", "Welcome Sara!");
    expect(result).toBe("Email sent!");
  });

  test("throws if user has no email", () => {
    const mockEmailFn = jest.fn();
    expect(() => sendWelcomeEmail(mockEmailFn, { name: "No Email" })).toThrow(
      "No email provided"
    );
    expect(mockEmailFn).not.toHaveBeenCalled();
  });
});

describe("Mocking - jest.mock() module", () => {
  test("uses mocked fetchUserById in getFormattedUser", async () => {
    const result = await getFormattedUser(1);
    expect(result).toBe("Name: Mocked User | Email: mock@example.com");
  });
});