const reduce = (array, reducer, initialValue) => {
    let accumulator = initialValue

    for (const element of array) {
        accumulator = reducer(accumulator, element)
    }

    return accumulator
}

const sampleArray = [1, 2, 3, 4, 5]


console.log(reduce(sampleArray, (acc, x) => acc + x, 0)) 

console.log(reduce(sampleArray, (acc, x) => acc * x, 1))
