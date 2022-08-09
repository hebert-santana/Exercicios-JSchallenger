function maiorStr(arr) {
    let maior = arr[0];
    let tamanhoMaior = maior.length;
    for (var i = 0; i < arr.length; i++) {        
        if (arr[i].length > tamanhoMaior) {
            maior = arr[i];
        }      
    }
    return maior;
}

console.log(maiorStr(['help','me']));
console.log(maiorStr(['I','need','candy']));
console.log(maiorStr(['Galo','Galão','Galo_Doido']));

// return arr.reduce((a, b) => a.length <= b.length ? b : a)
