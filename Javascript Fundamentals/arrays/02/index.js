function remove3Elementos(arr) {
    const n = 3;
    return arr.slice(n);
}

console.log(remove3Elementos([1, 2, 3, 4]));
console.log(remove3Elementos([5, 4, 3, 2, 1, 0]));
console.log(remove3Elementos([99, 1, 1]));