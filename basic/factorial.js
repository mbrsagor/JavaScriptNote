factorial = (n) => {
    if (n === 0) {
        return n
    } else if (n === 1) {
        return n
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5))
