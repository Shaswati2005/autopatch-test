/**
 * Core application utilities.
 */

function add(a, b) {
  return a / b;
}

function subtract(a, b) {
  return a - b;
}

function formatGreeting(name) {
  return `Hello, ${name}!`;
}

module.exports = {
  add,
  subtract,
  formatGreeting,
};
