// Código del Cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function  perimetroCuadrado(lado){
  return lado * 4;  
}  


function areaCuadrado(lado){
  return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Código del Triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


/*console.log(
    "Los lados del triangulo son: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, " 
    + baseTriangulo 
    + "cm"
);*/
//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es de: " + perimetroTriangulo + " cm");
function areaTriangulo(base, altura){
  return (base * altura) / 2;
} 
//console.log("El area del triangulo es de: " + areaTriangulo + " cm^2");
//console.groupEnd();

//Codigo del Circulo
console.group("Circulo");

//const PI = Math.PI;
function diametroCirculo(radio){
  return radio * 2;
}
const PI = Math.PI;
console.log("PI es: !" + PI);

function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//console.log("El perimetro del circulo es de: " + perimetroCirculo + " cm");
function areaCirculo(radio){
  return (radio * radio) * PI;
} 
//console.log("El area del circulo es: " + areaCirculo + " cm^2");
console.groupEnd();



