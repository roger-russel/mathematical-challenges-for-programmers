var initialArray = [1,12,10,19,20,14,13,8,7,16,18,6,2,3,15,18,9,4,5,11,17,10,13]

const isNegative = (num) => {
  return num < 0
}

const gettingFirstDuplicated = (arr) => {
  let duplicated = null

  for(var x = 0; x < arr.length; x++) {
    let absoluteNumber = Math.abs(arr[x])

    if(isNegative(arr[absoluteNumber - 1])) {
      duplicated = absoluteNumber
      break
    }

    arr[absoluteNumber - 1] = arr[absoluteNumber - 1] * - 1

  }

  return duplicated
}

console.log(gettingFirstDuplicated(initialArray))