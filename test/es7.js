
const expect = require('chai').expect
const Range = require('../common/range')

function equal(lhs, rhs) {
    if (lhs instanceof Object && rhs instanceof Object) {
        for (let key in lhs) {
            let lhsValue = lhs[key]
            let rhsValue = rhs[key]
            if (rhsValue === undefined) {
                console.log('rhs[' + key + ' is undefined for lhs value ' + lhsValue)
                return false
            }
            if (!equal(lhsValue, rhsValue)) {
                console.log('values differ for key ' + key + ' - lhs: ' + lhsValue + ', rhs: ' + rhsValue)
                return false
            }
        }
        for (let key in rhs) {
            if (lhs[key] === undefined) {
                console.log('lhs['+ key + '] is undefined for rhs value ' + rhs[key])
                return false
            }
        }
        return true
    } else {
        return lhs === rhs
    }
}

describe("ES7", () => {
    it("behaves as expected ^^", () => {
        let originalValue = {a: 1, b: 3, c: 12}
        expect(originalValue['hallo']).to.equal(undefined)
        let {a, b, c} = originalValue
        console.log('a: ' + a + ', b: ' + b + ', c: ' + c)
        expect(equal({a, b, c}, originalValue)).to.be.true
        expect(equal({a: 2, b, ...originalValue}, originalValue)).to.be.true
    })
})
