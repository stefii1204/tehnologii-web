const years = [2000, 2005, 1995, 2010, 1980, 2012, 1999]

const filterAdults = (years) => {
    const currentYear = new Date().getFullYear()

    
    const ages = years.map((year) => {
        return currentYear - year
    })

    
    const result = ages.filter((age) => {
        if (age >= 18) {
            return true
        }
        return false
    })

    return result
}

console.log(filterAdults(years))


