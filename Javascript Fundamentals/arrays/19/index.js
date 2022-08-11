function criaArrMinMax(min, max) {
    let arr = [];

    for (var i = 0; i <= (max-min); i++) {
        arr[i] = (min + i)
    }
    return arr;
}

console.log(criaArrMinMax(2, 10));
console.log(criaArrMinMax(1, 3));
console.log(criaArrMinMax(-5, 5));
console.log(criaArrMinMax(2, 7));