// Quick implementation using Dict

const arr = ["123","424","2424", "244", "321"]

var result = new Object(); //O(1) Time Complexity

arr.forEach(elm => {
    let sortedValue = elm.split("").sort() // O(n log n) Time Complexity - Space Complexity O(log(n))

    if(result[sortedValue] === undefined) result[sortedValue] = [] // O(1) Time Complexity

    result[sortedValue].push(elm) // O(1) Time Complexity
}) // 0(N) Time Complexity
