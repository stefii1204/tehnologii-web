function countDifferentChars(str1, str2) {
    
    if (str1.length !== str2.length) {
        return -1;
    }
    
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            count++;
        }
    }

    return count;
}

console.log(countDifferentChars("abc", "abd"));
console.log(countDifferentChars("test", "text")); 
console.log(countDifferentChars("aaa", "bbb"));
console.log(countDifferentChars("abc", "abcd")); 