function media (arr) {
    let media = 0;
    let somatorio = 0;
    for (var i = 0; i < arr.length; i++) {
        somatorio += arr[i];
    }
    media = (somatorio / arr.length);
    return media;
}

console.log(media([10, 100, 40]));
console.log(media([10, 100, 1000]));
console.log(media([-50, 0, 50, 200]));

// return arr.reduce((acc, cur) => acc + cur, 0) / arr.length
