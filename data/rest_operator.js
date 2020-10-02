// Basically rest operator get unlimited params

rest_operator = (...args) => {
    console.log(args);
}

rest_operator(1, 2, 3, 3, 5);
