
Range = require('../common/range.js')

let expect = require('chai').expect

function testSimpleRange(maximum) {
    let value = 0
    for (let n of Range.to(maximum)) {
        expect(n).to.be.equal(value)
        expect(n < maximum).to.be.true
        ++value
    }
}

function testComplexRange(minimum, maximum) {
    let value = minimum
    for (let n of new Range(minimum, maximum)) {
        expect(n).to.be.equal(value)
        expect(n < maximum).to.be.true
        expect(minimum < maximum).to.be.true
        ++value
    }
}

let values = [1000, 20, 3, 2, 1, 0, -1, -2, -3, -20, -1000]

describe("Range", () => {
    it("creates correct simple results", () => {
        for (let value of values) {
            testSimpleRange(value)
        }
    })
    
    it("creates correct complex results", () => {
        for (let min of values) {
            for (let max of values) {
                testComplexRange(min, max)
            }
        }
    })
})
