const formatString = (s, params) => {
    let modified = s

    for (let key in params) {
        const placeholder = '{' + key + '}'
        if (modified.includes(placeholder)) {
            modified = modified.replace(placeholder, params[key])
        }
    }

    return modified
}

const text = "un {substantiv} este {adjectiv}"
const values = {
    substantiv: "căluț",
    adjectiv: "drăguț"
}

console.log(formatString(text, values))
