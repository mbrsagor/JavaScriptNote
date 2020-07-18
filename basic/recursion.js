recursion = (number) => {
    console.log(number)

    if (number > 0) {
        recursion(number - 1)
    }
}

recursion(10)
