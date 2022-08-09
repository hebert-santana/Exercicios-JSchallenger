function ordenaOrdemDecrescente (arr) {
    function ordena (a, b) {
        return (a - b);
    }
    let crescente = arr.sort(ordena);
    return crescente.reverse();
}

console.log(ordenaOrdemDecrescente([1, 3, 2]));
console.log(ordenaOrdemDecrescente([4, 2, 3, 1]));

// return arr.sort((a, b) => b - a)