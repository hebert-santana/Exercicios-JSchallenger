function removeElementoEspecífico (arr, elemento) {
   let indice = arr.indexOf(elemento);
   arr.splice(indice, 1);
   return arr;
}

console.log(removeElementoEspecífico([1, 2, 3], 2));
console.log(removeElementoEspecífico([1, 2, '2'], '2'));
console.log(removeElementoEspecífico([false, '2', 1], false));
console.log(removeElementoEspecífico([1, 2, '2', 1], 1));