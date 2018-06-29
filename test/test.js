console.log("hey! I could set up some constants, class &c. right here and now!")

class Fun {
    enjoy() {
        console.log("Enjoying the fun")
    }
}

describe("something", () => {
    it("something even more specific", () => {
        (function recur(n) {
            if (n === undefined) {
                console.log("'twas undefined! So be it 10...")
                recur(10)
            } else if (n < 100) {
                recur(n + 3)
            } else {
                console.log("recur it will no longer at n equal to " + n)
            }
        })()
        new Fun().enjoy()
    })
})

describe('addTwoNumbers()', () => {
    it('should add two numbers', () => {
        // 1. ARRANGE
        let x = 5;
        let y = 1;
        let sum1 = x + y;
        
        // 2. ACT
        let sum2 = y + x;
        
        // 3. ASSERT
        // expect(sum2).to.be.equal(sum1);
        if (sum2 !== sum1) {
            throw "Addition not commutative on this machine"
        }
    });
});
