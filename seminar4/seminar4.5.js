const sampleText = "javascript este minunat"
const dictionary = ["este"]

const censorText = (text, dictionary) => {
    const words = text.split(' ')

    const result = words.map((word) => {
        if (dictionary.includes(word)) {
            
            if (word.length > 2) {
                return word[0] + '*'.repeat(word.length - 2) + word[word.length - 1]
            } else {
                return '*'.repeat(word.length)
            }
        } else {
            return word
        }
    })

    return result.join(' ')
}

console.log(censorText(sampleText, dictionary))
