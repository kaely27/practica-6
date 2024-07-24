//OPERADORES ARITMETICOS
let x = 8;
let y = 3;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log( x % y);//modulo (residuo de la division)
console.log(x ** y);//exponente 

//OPERADORES DE ASIGNACION 

let z = 5678;
z += 10; //z = z+10 
console.log(z);
z -= 5;
console.log(z);
z *= 2;
console.log(z);
z /= 4;
console.log(z);
z %= 3,
console.log(z);

//OPERADORES DE COMPARACION 

let a = 34;
let b = 12;
console.log("--------------");
console.log(a == b);
console.log(a != b);
console.log(a === 34);
console.log(a === "34");// compara el valor y el tipo de dato
console.log(a !== 34);
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);

//OPERADORES LOGICOS 
let v = true;
let f = false;
console.log(v&&f)
console.log(v||f);
console.log(!v);
//ORDEN DE OPERACION 
console.log(2+3*4);
console.log((2+3)*4);

//OPERADOR TERNARIO
let g = 30;
let resultado;

/*if(g >= 20){
    resultado = "g es mayor o igual que 20";
}else{
    resultado = "g es menor que 20";
}
console.log(resultado);*/

resultado = g >= 20 && g >= 0 ? "g es mayor o igual que 0 y 30 " : "g es menor o igual que 0 y 30";
console.log(resultado);

























