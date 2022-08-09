function retornaQntNegativos (arr) {
    contador = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            contador++;
        }
    }
    return contador;
}

console.log(retornaQntNegativos([1, -2, 2, -4]));
console.log(retornaQntNegativos([0, 9, 1]));
console.log(retornaQntNegativos([4, -3, 2, 1, 0]));

// return a.filter((el) => el < 0).length;