const sampleString = 'the quick brown fox jumps over the lazy dog';

const getLetterFrequencies = (text) => {
    const result = {};
    const letters = text.replace(/ /g, '').split(''); 

    for (let letter of letters) {
        if (letter in result) {
            result[letter]++;
        } else {
            result[letter] = 1;
        }
    }

    for (let letter in result) {
        result[letter] /= letters.length;
    }

    return result;
};

console.log(getLetterFrequencies(sampleString));
