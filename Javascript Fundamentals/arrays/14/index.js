function elementosIguais(arr) {
    let contador = 0;

    for (var i = 0; i < arr.length; i++) {

        if (arr[0] === arr[i]) {
            contador++;
        }

    }

    if (contador == arr.length) {
        return true
    } else {
        return false
    }
}

console.log(elementosIguais([true, true, true, true]));
console.log(elementosIguais(['teste', 'teste', 'teste']));
console.log(elementosIguais([1, 1, 1, 2]));
console.log(elementosIguais(['10', 10, 10, 10]));

//  return new Set(arr).size === 1