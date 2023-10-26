const { assert } = require("chai");
const request = require("request");


describe("#fetcherTest", () => {
 
  // Done callback is used to signal that asynchronous operation has completed:
  it("should return status code 200 for a valid domain", (done) => {
    // Replace current url with the url you will input in command line:
    request(url, (error, response, body) => {
      assert.strictEqual(response.statusCode, 200);
      // Indicates that the asynchronous test is complete or else Mocha will hang:
      done();
    });
  });
});