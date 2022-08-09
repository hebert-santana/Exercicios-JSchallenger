function removeElementos (arr) {
    let numeroElementos = arr.length;
    let extrair = numeroElementos -3;
    return arr.slice(0, (numeroElementos - extrair));
}

console.log(removeElementos([1, 2, 3, 4]));
console.log(removeElementos([5, 4, 3, 2, 1, 0]));
console.log(removeElementos([99, 1, 1]));

//  return a.slice(0, 3);