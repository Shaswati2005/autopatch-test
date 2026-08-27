const { test, describe } = require('node:test');
const assert = require('node:assert');
const { add, subtract, formatGreeting } = require('../src/math');

describe('Math & Greeting Unit Tests', () => {
  test('add calculates sum of two numbers', () => {
    assert.strictEqual(add(2, 3), 5);
  });

  test('subtract calculates difference of two numbers', () => {
    assert.strictEqual(subtract(10, 4), 6);
  });

  test('formatGreeting formats message correctly', () => {
    assert.strictEqual(formatGreeting('AutoPatch'), 'Hello, AutoPatch!');
  });
});
