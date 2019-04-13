export function element(type, content) {
    let result = document.createElement(type)
    for (let element of content) {
        result.appendChild(element)
    }
    return result
}

export function div(...content) {
    return element('div', content)
}

export function span(...content) {
    return element('span', content)
}

export function a(...content) {
    return element('a', content)
}

export function table(...content) {
    return element('table', content)
}

export function th(...content) {
    return element('th', content)
}

export function tr(...content) {
    return element('tr', content)
}

export function td(...content) {
    return element('td', content)
}

export function img(src, ...content) {
    let result = element('img', content)
    result.src = src
    return result
}

export function text(content) {
    return document.createTextNode(content)
}
