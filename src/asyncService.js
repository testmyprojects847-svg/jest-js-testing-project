function fetchUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) return reject(new Error("ID is required"));
      if (id === 99) return reject(new Error("User not found"));
      resolve({ id, name: "Ahmed Ali", email: "ahmed@example.com" });
    }, 100);
  });
}

async function getUserEmail(id) {
  const user = await fetchUserById(id);
  return user.email;
}

module.exports = { fetchUserById, getUserEmail };