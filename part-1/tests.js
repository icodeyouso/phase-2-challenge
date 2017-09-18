var expect = require('chai').expect
var {
  weekday,
  snippet,
  numProps
} = require('./functions.js')

describe("weekday", function () {
  it("should be the day mon", function () {
    expect(weekday(new Date(2017, 5, 19))).to.equal("mon")
  })
  it("should throw an error", function () {
    expect(
      function () {
        weekday("2017, 5, 19")
      }).to.throw(Error)

  })
})

describe("snippet", function () {
  it("should throw an error", function () {
    expect(
      function () {
        snippet(33, 20)
      }).to.throw(Error)
  })
  it("should be i am quis", function () {
    expect(snippet("i am quis", 10)).to.equal("i am quis")
  })

})