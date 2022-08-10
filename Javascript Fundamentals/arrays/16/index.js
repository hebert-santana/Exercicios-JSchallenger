function ordenaArrayObjeto(arr) {
    arr.sort(function(a, b) {
        return parseFloat(a.b) - parseFloat(b.b);
    });
    return arr;
}

console.log(ordenaArrayObjeto([{a:1,b:2},{a:5,b:4}]));
console.log(ordenaArrayObjeto([{a:2,b:10},{a:5,b:4}]));
console.log(ordenaArrayObjeto([{a:1,b:7},{a:2,b:1}]));

/* const sort = (x, y) => x.b - y.b;
   return arr.sort(sort); */