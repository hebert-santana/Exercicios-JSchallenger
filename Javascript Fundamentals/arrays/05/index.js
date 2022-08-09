function retornaNUltimos (arr, num) {
    return arr.slice(-num);
}

console.log(retornaNUltimos([1, 2, 3, 4, 5], 2));
console.log(retornaNUltimos([1, 2, 3], 6));
console.log(retornaNUltimos([1, 2, 3, 4, 5, 6, 7, 8], 3));