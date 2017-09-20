var expect = require('chai').expect
var {
  weekday,
  snippet,
  numProps,
  filterBetween
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
describe('numProps', () => {
  it('should be 3', () => {
    const obby = {
      me: 2,
      you: 3,
      her: 4,
    };
    expect(numProps(obby)).to.equal(3);
  });
  it('should be an error', () => {
    expect(() => {
      numprops(3723);
    }).to.throw(Error);
  });
  it('should be 4', () => {
    const obby = {
      me: 2,
      you: 3,
      her: 4,
      him: 1,
    };
    expect(numProps(obby)).to.equal(4);
  });
  it('should be an error', () => {
    expect(() => {
      numprops('isfishf');
    }).to.throw(Error);
  });
  it('should be an error', () => {
    expect(() => {
      numprops(nope());
    }).to.throw(Error);
  });
  it('should be 0', () => {
    expect(numProps({})).to.equal(0);
  });
});

describe('filterBetween', () => {
  it('should be 5, 8, 9, 10, 100, 150', () => {
    var number = [5, 8, 9, 10, 100, 150, 200]
    expect(filterBetween(number, 5, 200))
      .to.deep.equal([5, 8, 9, 10, 100, 150, 200]);
  });
  it('should be error thrown', () => {
    expect(() => {
      filterBetween(12332432, 5, 8);
    }).to.throw(Error);
  });
})