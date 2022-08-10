function mesclaEOrdenaArr(arr1, arr2) {
    let arr = arr1.concat(arr2);
    arr.sort(ordena);
    function ordena(a, b) {
        return (a-b);
    }
    const arrSemRepeticao = [...new Set(arr)];
    return arrSemRepeticao;
}

console.log(mesclaEOrdenaArr([1, 2, 3], [3, 4, 5]));
console.log(mesclaEOrdenaArr([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// return [...new Set([...a, ...b])].sort((x, y) => x - y);