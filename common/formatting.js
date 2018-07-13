function dx(width, characterToInsert, value) {
    if (characterToInsert.length !== 1) {
        throw 'lentgh [' + characterToInsert.length + ' of characterToInsert [' + characterToInsert + '] != 1'
    }
    let converted = value.toString()
    if (converted.length < width) {
        const missingLength = width - converted.length
        let result = new Array(missingLength + 1)
        for (let index = 0; index < missingLength; ++index) {
            result.push(characterToInsert)
        }
        result.push(converted)
        return result.join('')
    } else {
        return converted
    }
}

function d(width, value) {
    return dx(width, ' ', value)
}

function d0(width, value) {
    return dx(width, '0', value)
}

function f(totalWidth, fractionWidth, value) {
    const sign = (value < 0.0 ? '-' : '')
    totalWidth -= sign.length
    value = Math.abs(value)
    const integerPart = Math.floor(value)
    if (fractionWidth < 1) {
        return sign + d(totalWidth, integerPart)
    } else {
        const fraction = Math.ceil((value - integerPart) * Math.pow(10, fractionWidth))
        totalWidth -= (fractionWidth + 1)
        return sign + d(totalWidth, integerPart) + '.' + d0(fractionWidth, fraction)
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = {
        dx: dx,
        d: d,
        d0: d0,
        f: f
    }
}
