function somaMaior(arr, num) {
    let soma = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            soma += arr[i];
        }
    }
    return soma;
}

console.log(somaMaior([1, 2, 3, 4, 5, 6, 7], 2));
console.log(somaMaior([-10, -11, -3, 1, -4], -3));
console.log(somaMaior([78, 99, 100, 101, 401], 99));