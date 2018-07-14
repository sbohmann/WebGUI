
const expect = require('chai').expect
const formatting = require('../common/formatting')

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
