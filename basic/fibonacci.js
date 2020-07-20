/**
 * The fibonacci example look like same
 * 1 + 2 + 3 + 4 + 5
 */


fibonacci = (number) => {
    if (number === 0) {
        return number;
    } else if (number === 1) {
        return number;
    } else {
        return number + fibonacci(number - 1);
    }
}

console.log(fibonacci(5));
