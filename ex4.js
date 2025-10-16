function intercalateArrays(array1, array2) {

    if (array1.length !== array2.length) {
        return [];
    }

    let result = [];

    
    for (var i = 0; i < array1.length; i++) {
        result.push(array1[i]); 
        result.push(array2[i]); 
    }

    return result;
}

let a = [1, 2, 3];
let b = ["a", "b", "c"];

console.log(intercalateArrays(a, b));          
console.log(intercalateArrays(["x"], ["y"])); 
console.log(intercalateArrays([1, 2], ["a"]));
