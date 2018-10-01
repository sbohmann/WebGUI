const util = require('util')
const {d, f} = require('./common/formatting')

const interestRateInPercent = 7.0
const interestRate = interestRateInPercent / 100.0

const startAmount = 20 * 1000.0
const monthlyPayment = 270.0

let amount = startAmount
let interestForMonth = 0.0
let interest = 0.0
let monthsPassed = 0
let sumPayed = 0.0

function logStatus() {
    console.log(
        d(2, monthsPassed) +
        ' - amount: ' +
        f(12, 2, amount) +
        ', payed: ' +
        f(12, 2, sumPayed) +
        ', interest for month: ' +
        f(6, 2, interestForMonth) +
        ', interest: ' +
        f(6, 2, interest))
}

while (amount + interest > 0) {
    ++monthsPassed
    interestForMonth = interestRate * amount / 12
    interest += interestForMonth
    logStatus()
    amount -= monthlyPayment
    sumPayed += monthlyPayment
    if (monthsPassed % 12 === 0) {
        amount += interest
        interest = 0
    }
}
