/**
 * Here, The `facebook` is not a bulding method it's my cusotm method
 * The argument `... args` can accept multiple argument.
 * `args` return a array
 */

facebook = (...args) => {
    return args;
}

let _print = facebook({"username": "mbrsagor", "password": "xyz12345"})
console.log(_print);
