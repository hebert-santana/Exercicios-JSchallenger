function somatórioArray (arr) {
    let somatorio = 0;
    for (var i = 0; i < arr.length; i++) {
        somatorio += arr[i];
    }
    return somatorio;
}

console.log(somatórioArray([10, 100, 40]));
console.log(somatórioArray([10, 100, 1000, 1]));
console.log(somatórioArray([-50, 0, 50, 200]));

//    return a.reduce((acc, cur) => acc + cur, 0);
