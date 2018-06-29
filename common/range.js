
class Range {
    constructor(inclusiveMinimum, exclusiveMaximum) {
        this._inclusiveMinimum = inclusiveMinimum
        this._exclusiveMaximum = exclusiveMaximum
        this[Symbol.iterator] = () => this._createIterator()
    }
    
    static to(exclusiveMaximum) {
        return new Range(0, exclusiveMaximum)
    }
    
    // TODO remove
    // _createIterator() {
    //     return {
    //         currentValue: this._inclusiveMinimum,
    //         exclusiveMaximum: this._exclusiveMaximum,
    //
    //         next() {
    //             if (this.currentValue < this.exclusiveMaximum) {
    //                 return {done: false, value: this.currentValue++};
    //             } else {
    //                 return {done: true};
    //             }
    //         }
    //     }
    // }
    
    * _createIterator() {
        for (let value = this._inclusiveMinimum; value < this._exclusiveMaximum; ++value) {
            yield value;
        }
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Range
}
