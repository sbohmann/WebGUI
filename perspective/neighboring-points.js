
export class NeighboringPoints {
    constructor(closestPointProjection, nextPointProjection, previousPointProjection) {
        this._ap = Object.assign({ z: 1 }, closestPointProjection)
        this._bp = nextPointProjection
        this._dp = previousPointProjection
        this._calculateResult()
    }

    _calculateResult() {
        this.a = this._ap
        this._calculateXTerms()
        this._solveForBz()
        this._calculateDz()
        this._setResultingPoints()
    }

    _calculateXTerms() {
        this._squareXTerm = (this._bp.x * this._dp.x - this._ap.x * this._bp.x)
        this._linearXTerm = (this._ap.x - this._ap.x * this._dp.x - this._ap.x * this._bp.x - this._bp.x * this._dp.x)
        this._constantXTerm = (this._ap.x * this._ap.x + this._ap.x * this._dp.x)
    }

    _solveForBz() {
        if (Math.abs(this._squareXTerm) > 0.00001) {
            this._solveFoxBzQuadratically()
        }
    }

    _solveFoxBzQuadratically() {
        const p = this._linearXTerm / this._squareXTerm
        const q = this._constantXTerm / this._squareXTerm
        const lhsPart = (-p / 2.0)
        const rhsPart = (Math.sqrt(p * p / 4.0 - q))
        console.log("square: " + this._squareXTerm)
        console.log("linear: " + this._linearXTerm)
        console.log("constant: " + this._constantXTerm)
        console.log("p: " + p)
        console.log("q: " + q)
        console.log("lhs: " + lhsPart)
        console.log("rhs: " + rhsPart)
        console.log("lhs + rhs: " + lhsPart + rhsPart)
        console.log("lhs - rhs: " + lhsPart - rhsPart)
    }

    _calculateDz() {

    }

    _setResultingPoints() {

    }
}
