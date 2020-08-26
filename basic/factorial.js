/**
 * The factorial example look like same
 * 1 x 2 x 3 x 4 x 5
 */

factorial = (n) => {
    if (n === 0 || n == 1) {
        return n
    }else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5));
