const chai = require("chai");
const expect = chai.expect;

//There is a chai as promise plugin
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

// sinon for the spies
const sinon = require("sinon");

//sinon-chai let's you do checks like expect spy to have been called once or called with.
const sinonChai = require("sinon-chai");
chai.use(sinonChai);
// After you call spies you have to do a spy.restore() - this resets the counts and everything so that in your next test, your numbers match.

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
          done();
        });
    });

    it("should test a promise with return", () => {
      return demo.addPromise(1, 2).then(result => {
        expect(result).to.equal(3);
      });
    });

    it("should test promiso with async await", async () => {
      let result = await demo.addPromise(1, 2);

      expect(result).to.equal(3);
    });

    it("should test promise with chai promise", async () => {
      await expect(demo.addPromise(1, 2)).to.eventually.equal(3);
    });
  });

  context("test doubles", () => {
    it("should spy on log", () => {
      // the first parameter is the library or method I'm tyring to spy on (console). the second parameter is the actual function.
      let spy = sinon.spy(console, "log");
      demo.foo();

      expect(spy.calledOnce).to.be.true;
      expect(spy).to.have.been.calledOnce;
    });
  });

  
});
