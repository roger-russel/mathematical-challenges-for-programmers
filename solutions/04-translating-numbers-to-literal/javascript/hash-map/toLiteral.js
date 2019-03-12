const literalNumbers = {
    0: 'zero',
    1: 'um',
    2: 'dois',
    3: 'três',
    4: 'quatro',
    5: 'cinco',
    6: 'seis',
    7: 'sete',
    8: 'oito',
    9: 'nove',
    10: 'dez',
    11: 'onze',
    12: 'doze',
    13: 'treze',
    14: 'quatorze',
    15: 'quinze',
    16: 'dezesseis',
    17: 'dezessete',
    18: 'dezoito',
    19: 'dezenove',
    20: 'vinte',
    30: 'trinta',
    40: 'quarenta',
    50: 'cinquenta',
    60: 'sessenta',
    70: 'setenta',
    80: 'oitenta',
    90: 'noventa',
    100: 'cento',
    200: 'duzentos',
    300: 'trezentos',
    400: 'quatrocentos',
    500: 'quinhentos',
    600: 'seiscentos',
    700: 'setessentos',
    800: 'oitocentos',
    900: 'novecentos'
}

const translateNumberToLiteral = (n) => {
    if (literalNumbers[n]) {
        // Dealing with 100 case ("Cento" and "Cem")
        return n === 100 ? 'cem' : literalNumbers[n]
    }

    if (n < 100) {
        const dozen = Number(n.toString()[0] + "0")
        const unit = Number(n.toString()[1])

        return n[1] === 0 ? `${literalNumbers[dozen]}` : `${literalNumbers[dozen]} e ${literalNumbers[unit]}`   
    }

    const hundred = Number(n.toString()[0] + "00")

    let checkingDozen = n.toString().slice(1)

    if (literalNumbers[checkingDozen]){
        return `${literalNumbers[hundred]} e ${literalNumbers[checkingDozen]}`
    }

    const dozen =  Number(n.toString()[1] + "0")
    const unit = Number(n.toString()[2])

    if (dozen === 0) {
        return `${literalNumbers[hundred]} e ${literalNumbers[unit]}`
    }

    if (unit === 0) {
        return `${literalNumbers[hundred]} e ${literalNumbers[dozen]}`
    }

    return `${literalNumbers[hundred]} e ${literalNumbers[dozen]} e ${literalNumbers[unit]}`
}

module.exports = translateNumberToLiteral