const assert = require('assert');
const { add, subtract, formatGreeting } = require('../src/math');

let testFn = global.test || global.it;
let describeFn = global.describe;

if (!testFn || !describeFn) {
  try {
    const nodeTest = require('node:test');
    testFn = nodeTest.test;
    describeFn = nodeTest.describe;
  } catch (e) {
    testFn = (name, fn) => {
      try {
        fn();
      } catch (err) {
        console.error(`✗ ${name}`);
        throw err;
      }
    };
    describeFn = (name, fn) => {
      fn();
    };
  }
}

const test = testFn;
const describe = describeFn;

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
