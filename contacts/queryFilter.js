
class QueryFilter {
    constructor(text) {
        this._extractWords(text)
    }

    _extractWords(text) {
        this._words = text
            .split(/[,\s]+/)
            .map(word => word.trim().toLowerCase())
            .filter(word => word.length > 0)
        console.log(this._words)
    }

    matches(contact) {
        for (let word of this._words) {
            if (!this._wordContained(contact, word)) {
                return false
            }
        }
        return true
    }

    _wordContained(contact, word) {
        for (let element of [contact.lastName, contact.firstName]) {
            if (element.toLowerCase().includes(word)) {
                return true
            }
        }
        return false
    }
}
