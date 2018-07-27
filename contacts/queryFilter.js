
class QueryFilter {
    constructor(text) {
        this._text = text
    }

    matches(contact) {
        return contact.lastName.startsWith('A')
    }
}