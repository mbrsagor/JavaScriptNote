/**
 * `filter` return array.
 * `find` return array index.
 * `map` can iterate item form array or object.
 */

let items = ["Mbr-Sagor", "Saif Nirbo", "Shimul", "Faruk", "Lokman"]

let _filter = items.filter((item) => item === "Faruk");

console.log(_filter);

let _find = items.find((item) => item === "Shimul");
console.log(_find);

let _map = items.map((item) => {
    return item
})
console.log(_map);
