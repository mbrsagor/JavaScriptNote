let a = [1, 2, 4, 6, 1, 100, 0, 10000, 3];

a.sort(function (a, b) {
    return a - b;
});

function binarySearch(arr, value) {
    if (arr.length === 0) return -1;
    var low = 0,
        high = arr.length - 1,
        mid;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (arr[mid] == value) return mid;
        else if (arr[mid] < value) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
console.log(binarySearch(a, 1005))
