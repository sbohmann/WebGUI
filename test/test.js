
Range = require('../common/range.js')
formatting = require('../common/formatting.js')

let expect = require('chai').expect

function testSimpleRange(maximum) {
    let value = 0
    for (let n of Range.to(maximum)) {
        expect(n).to.equal(value)
        expect(n < maximum).to.be.true
        ++value
    }
}

function testComplexRange(minimum, maximum) {
    let value = minimum
    for (let n of new Range(minimum, maximum)) {
        expect(n).to.equal(value)
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

describe("Integer Formatting", () => {
    it("creates correct strings", () => {
        expect(formatting.d(3, 1)).to.equal('  1')
        expect(formatting.d(3, 12345)).to.equal('12345')
        expect(formatting.d0(3, 1)).to.equal('001')
        expect(formatting.d0(3, 12345)).to.equal('12345')
        expect(formatting.dx(3, 'a', 1)).to.equal('aa1')
        expect(formatting.dx(3, 'a', 12345)).to.equal('12345')
        expect(formatting.f(3, 0, 1)).to.equal('  1')
        expect(formatting.f(3, 0, 12345)).to.equal('12345')
        expect(formatting.f(3, 2, 1)).to.equal('1.00')
        expect(formatting.f(3, 2, 12345)).to.equal('12345.00')
        expect(formatting.f(10, 2, 1)).to.equal('      1.00')
        expect(formatting.f(10, 2, 12345)).to.equal('  12345.00')
        expect(formatting.f(3, 0, 1.97)).to.equal('  1')
        expect(formatting.f(3, 0, 12345.97)).to.equal('12345')
        expect(formatting.f(3, 2, 1.97)).to.equal('1.97')
        expect(formatting.f(3, 2, 12345.97)).to.equal('12345.97')
        expect(formatting.f(10, 2, 1.97)).to.equal('      1.97')
        expect(formatting.f(10, 2, 12345.97)).to.equal('  12345.97')
    })
})
