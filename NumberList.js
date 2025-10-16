function getNumbersList(numbers) {

    if (!Array.isArray(numbers)) {
        return []; 
    }

    
    return numbers;
}


console.log(getNumbersList([1, 2, 3, 4, 5]));
console.log(getNumbersList([10, 20, 30]));
console.log(getNumbersList([]));
