const arr = ["123", "424", "2424", "244", "321", "4422", "1234", "12345", "653452"]

var primeDict = {
    "0": 2,
    "1": 3,
    "2": 5,
    "3": 7,
    "4": 11,
    "5": 13,
    "6": 17,
    "7": 19,
    "8": 23,
    "9": 29,
}

var result = new Object(); 

arr.forEach(elm => {
    var primeIndex = 1
    for (var i = 0; i < elm.length; i++) {
        primeIndex *= primeDict[elm.charAt(i)]        
    }

    if (typeof result[primeIndex] === 'undefined')
        result[primeIndex] = []

    result[primeIndex].push(elm)
})

console.log(result)
