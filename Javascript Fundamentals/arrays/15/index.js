function somaAleatoriosArrays() {
    let array = [];
    for (var i = 0; i < arguments.length; i++) {
        array = array.concat(arguments[i]);
    }
    return array;
}

console.log(somaAleatoriosArrays([1, 2, 3], [4, 5, 6]));
console.log(somaAleatoriosArrays(['a', 'b', 'c'], [4, 5, 6]));
console.log(somaAleatoriosArrays([true, true], [1, 2], ['a', 'b']));

// return arrays.flat()