const { fetchUserById } = require("./asyncService");

async function getFormattedUser(id) {
  const user = await fetchUserById(id);
  return `Name: ${user.name} | Email: ${user.email}`;
}

function sendWelcomeEmail(emailFn, user) {
  if (!user.email) throw new Error("No email provided");
  return emailFn(user.email, `Welcome ${user.name}!`);
}

module.exports = { getFormattedUser, sendWelcomeEmail };