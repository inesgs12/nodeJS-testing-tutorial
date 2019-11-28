const chai = require("chai");
const expect = chai.expect;

var demo = require("./demo.js");

describe("demo", () => {
  context("add", () => {
    it("should add two numbers", () => {
      expect(demo.add(1, 2)).to.equal(3);
    });
  });

  context("callback add", () => {
    it("should test the callback", done => {
      demo.addCallback(1, 2, (err, result) => {
        expect(err).to.not.exist;
        expect(result).to.equal(3);
        done();
      });
    });
  });

  context("test promise", () => {
    it("should add with a promise", done => {
      demo
        .addPromise(1, 2)
        .then(result => {
          expect(result).to.equal(3);
          done();
        })
        .catch(ex => {
          console.log("caught an error");
          done(ex);
        });
    });
  });
});
