//CODIGO DEL CUADRADO
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 


//console.log("El perimetro delcuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//CODIGO DEL TRIANGULO
console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
  //"Los lados de mi triangulo miden: " 
    //+ ladoTriangulo1 
    //+ "cm, " 
    //+ ladoTriangulo2 
    //+ "cm, " 
    //+ baseTriangulo 
    //+ "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
  return lado1 + lado2 + base;
}  
//console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
//console.log("El area del triangulo es de: " + areaTriangulo + "cm^2");

console.groupEnd();

//CODIGO DEL CIRCULO

console.group("Circulo");

// RADIO
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + "cm");



//DIAMETRO
function diametroCirculo(radio){
    return radio * 2;
}



//PERIMETRO
const PI = Math.PI;
console.log("PI es: " + PI);


//CIRCUNFERENCIA
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}



//AREA
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();














