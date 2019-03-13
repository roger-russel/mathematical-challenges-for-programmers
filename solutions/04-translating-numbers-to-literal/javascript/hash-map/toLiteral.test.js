const translateNumberToLiteral = require('./toLiteral')

describe('Translating numbers to literals', () => {

    test('Converting 100 to cem', () => {
        expect(translateNumberToLiteral(100)).toBe("cem")
    })


    test('Converting 219 to duzentos e dezenove', () => {
        expect(translateNumberToLiteral(219)).toBe("duzentos e dezenove")
    })

    test('Converting 7 to sete', () =>{
        expect(translateNumberToLiteral(7)).toBe("sete")
    })

    test('Converting 81 to oitenta e um', () =>{
        expect(translateNumberToLiteral(81)).toBe("oitenta e um")
    })

    test('Converting 450 to quatrocentos e cinquenta', () =>{
        expect(translateNumberToLiteral(450)).toBe("quatrocentos e cinquenta")
    })

    test('Converting 792 to setessentos e noventa e dois', () =>{
        expect(translateNumberToLiteral(792)).toBe("setessentos e noventa e dois")
    })
    
    test('Converting 300 to trezentos', () =>{
        expect(translateNumberToLiteral(300)).toBe("trezentos")
    })
})