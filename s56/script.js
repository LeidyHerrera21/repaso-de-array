/*arrays o arreglos

coleccion de datos ordenados 

'=',: asignación
 '==', : igualdad
'===’ : identidad

INDICES
inicio => 0
final => tamaño menos*/

let arr = [1, 2, 3, 4, 5];

console.log(arr);

//accede por indice

console.log(arr[2]);

//array de dos dimensiones 
/* 
Let matrix = [1, 2, 3,
              4, 5, 6
              7, 8, 9];
*/

let matrix = [(1, 2, 3), (4, 5, 6), (7, 8, 9)]

console.log(matrix);
console.log(matrix.length);
console.log(matrix[2]);
console.log(matrix[2][0]);

//metodos

let nums = [1, 2, 3];
nums.push(4);
console.log(nums);

//

let mun = 23;
nums.push(24);

//pop elimina el ultimo

/*nums.pop();
console.log(nums);
console.log(eliminado);*/

//unshift recibe un valor
//shift elimina el primer valor

//Shift y unshift
/* [1, 2, 3, 4, 5]
   [2, 3, 4, 5]
   [1, 2, 3, 4, 5]
*/
let numero = [1, 2, 3, 4, 5];

console.log(numero);
numero.shift();
console.log(numero);
numero.unshift(1);
console.log(numero);

//parametros y argumentos

function saluda1() {
    console.log("Hola");
};

function saluda2() {
    console.log('Hola $ {nombre}');
};

saluda1() 
saluda2("Leidy");

//slice

let numers = [1, 2, 3, 4, 5, 6];
//numers = ['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'];

console.log(numers);
console.log(numers.slice(0, 3));
console.log(numers);

//splice

let num = [1, 2, 3, 4, 5, 6];

console.log(num);
num.splice(3, 2, 'hola', 'ciao');
console.log(num);

//concat une 

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);

console.log(arr1);
console.log(arr2);
console.log(arr1);
console.log(arr2);

// los arrays originales no se modifican

console.log(arr1);
console.log(arr2);

//busquedad y modificacion de array

//indexOf

let nu = [3, 1, 2, 3, 4, 5, 3, 6];

console.log(nu.indexOf(3));
console.log(nu.lastIndexOf(3))
console.log(nu.includes(1));
console.log(nu.includes(1, 2));
console.log(nu.includes(3));
console.log(nu.includes(3, 2));

