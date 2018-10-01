
class Contacts {
    constructor() {
        this._data = new DummyContacts(100000).value
        this._filter = null
    }

    set filter(value) {
        this._filter = value
    }

    * [Symbol.iterator]() {
        if (this._filter == null) {
            yield* this._data
        } else {
            yield* this._filteredIterator()
        }
    }

    * _filteredIterator() {
        for (let contact of this._data) {
            if (this._filter(contact)) {
                yield contact
            }
        }
    }
}
