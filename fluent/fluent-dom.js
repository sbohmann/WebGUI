
class Text {
    constructor(value) {
        this.domElement = document.createTextNode(value)
    }
}

class Element {
    constructor(elementType) {
        this.domElement = document.createElement(elementType).appendChild()
    }

    function children(...childrenToAdd) {
        for (let child of childrenToAdd) {
            this.domElement.appendChild(child)
        }
    }
}

export function element(elementType) {
    return new Element(elementType)
}

export function div() {
    return element('div')
}

export function p() {
    return element('p')
}

export function span() {
    return element('span')
}

export function h(n) {
    if (!allowedHeaderTypes.contains(n)) {
        throw RangeError('Illegal header type: ' + n + ' - allowed: 1 ... 6')
    }
    return element('h' + n)
}

const allowedHeaderTypes = new Set([1, 2, 3, 4, 5, 6])

export function a(href) {
    let result = element('a')
    result.href = href
    return result;
}

export function button() {
    return element('div')
}

export function input(inputType) {
    let result = element('input')
    result.type = inputType
}

export function phr() {
    return element('div')
}

export function ul() {
    return element('div')
}

export function ol() {
    return element('div')
}

export function li() {
    return element('div')
}

export function img() {
    return element('div')
}
