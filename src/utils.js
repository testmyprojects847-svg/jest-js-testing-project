// ========== Numbers ==========
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Inputs must be numbers");
  return a + b;
}

function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

// ========== Strings ==========
function capitalize(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");
  if (str.length === 0) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function reverseString(str) {
  if (typeof str !== "string") throw new Error("Input must be a string");
  return str.split("").reverse().join("");
}

// ========== Arrays ==========
function sumArray(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  return arr.reduce((acc, val) => acc + val, 0);
}

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");
  return [...new Set(arr)];
}

// ========== Objects ==========
function mergeObjects(obj1, obj2) {
  if (typeof obj1 !== "object" || typeof obj2 !== "object")
    throw new Error("Inputs must be objects");
  return { ...obj1, ...obj2 };
}

function getFullName(user) {
  if (!user.firstName || !user.lastName)
    throw new Error("Missing first or last name");
  return `${user.firstName} ${user.lastName}`;
}

module.exports = {
  add, divide,
  capitalize, reverseString,
  sumArray, removeDuplicates,
  mergeObjects, getFullName,
};