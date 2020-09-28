let binarySearch = function (arr, val) {
    var half = Math.floor(arr.length / 2);

    if (arr.length === 0) {
        return -1;
    } else if (arr[half] === val) {
        console.log("val: ", val, "arr[half]: ", arr[half]);
        return val;
    } else if (val > arr[half]) {
        console.log("val: ", val, "arr[half]: ", arr[half]);
        return binarySearch(arr.slice(half, arr.length), val);
    } else {
        console.log("val: ", val, "arr[half]: ", arr[half]);
        return binarySearch(arr.slice(0, half), val);
    }
}


let arr = [1, 5, 20, 58, 76, 8, 19, 41].sort(function (a, b) {
    return a - b
});

console.log("Sorted array: " + arr);
console.log(binarySearch(arr, 76));
console.log(binarySearch(arr, 19));
console.log(binarySearch(arr, 0));