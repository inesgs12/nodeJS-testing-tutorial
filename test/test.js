const assert = require("assert");

// the first thing you need is a describe block and this is where all the tests go. It takes 2 parameters: a string (generally the file name you are testing), the second parameter is a call back function where everything else will go.

// Inside the describe block, I will create a context which is an alias for describe. You can use it to distinguish. By convention the first argument will be the function to be tested and the second will again be a callback function. The tests will be 'it' blocks.

// PEDING TEST - it is a test that has nothing.
// Sometimes it helps to create a test for a function that you may not be ready to test or that may not exist yet.

// BEFORE AND AFTER functions - help you set up and turn down tests.
// BEFORE EACH AND AFTER EACH happen before each test inside a block
// Allow you to create subs and variables that are needed for the tests.

// CHAI is an assertion library
// It has 3 styles: should, expect, and assert. They all do the same thing, it depends on your preference. Should seems more hard to work with.

//sinon is for test doubles. They are functions that we can inject into our function in the form of spies or stubs, they will leet us know what is happening inside or behind the scenes. We can stub a function completely, to isolate the code you are testing. Isolating the code is the number one thing in unit testing.

describe("file to be tested", () => {
  context("function to execute", () => {
    // before(() => {
    //   console.log("=======before");
    // });

    // after(() => {
    //   console.log("=======after");
    // });

    // beforeEach(() => {
    //   console.log("=======beforeEach");
    // });

    // afterEach(() => {
    //   console.log("=======afterEach");
    // });
    it("should do something", () => {
      assert.equal(1, 1);
    });

    it("should do something else", () => {
      assert.deepEqual({ name: "joe" }, { name: "joe" });
    });

    it("this is a pending test");
  });

  context("another function", () => {
    it("should do something");
  });
});
