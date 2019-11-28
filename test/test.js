const assert = require("assert");

// the first thing you need is a describe block and this is where all the tests go. It takes 2 parameters: a string (generally the file name you are testing), the second parameter is a call back function where everything else will go.

// Inside the describe block, I will create a context which is an alias for describe. You can use it to distinguish. By convention the first argument will be the function to be tested and the second will again be a callback function. The tests will be 'it' blocks.

// PEDING TEST - it is a test that has nothing.
// Sometimes it helps to create a test for a function that you may not be ready to test or that may not exist yet.

describe("file to be tested", () => {
  context("function to execute", () => {
    it("should do something", () => {
      assert.equal(1, 1);
    });

    it("should do something else", () => {
      assert.deepEqual({ name: "joe" }, { name: "joe" });
    });

    it("this is a pending test");
  });
});
