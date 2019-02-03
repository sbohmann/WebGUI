export function element(type, content) {
    let result = document.createElement(type)
    for (let element of content) {
        console.log(element)
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

export function img(src, ...content) {
    let result = element('img', content)
    result.src = src
    return result
}

export function text(content) {
    return document.createTextNode(content)
}
