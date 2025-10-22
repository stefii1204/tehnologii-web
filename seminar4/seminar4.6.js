const sampleArray = [
    { name: "Ana", age: 25 },
    { name: "Mihai", age: 30 },
    { name: "Ioana", age: 22 },
    { name: "George", age: 28 }
]

const sortByKey = (array, key) => {
    const result = [...array] 
    result.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1
        } else if (a[key] > b[key]) {
            return 1
        } else {
            return 0
        }
    })

    return result
}

console.log(sortByKey(sampleArray, "age"))
