//Calculo de figuras geometricas

//CUADRADO
//Declarar variables
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado + " cm");

//Calculo de Perimetro
const perimetroCuadrado =ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

//Calculo de Area
const areaCuadrado =ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//TRIANGULO
//Declarar variables
console.group("Triangulos");
const ladoTriangulo1 =6;
const ladoTriangulo2 =6;
const baseTriangulo =4;
const alturaTriangulo= 5.5;
console.log("Los lados del triangulo miden: "+ ladoTriangulo1 + " cm"+", "+ ladoTriangulo2 + " cm."+"La base mide: " +baseTriangulo+" cm.");
console.log("La altura del triangulo es de: "+ alturaTriangulo+" cm.");

//Calculo de Perimetro
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cm");

//Calculo de Area
const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El area del triangulo es: " + areaTriangulo + " cm");
console.groupEnd();

//CIRCULO
console.group("Circulos");

//Declaro la variable Radio
const radioCirculo= 4;
console.log("El radio de un circulo: " + radioCirculo + " cm.");

//Calculo el Diametro
const diametroCirculo= radioCirculo*2;
console.log("El diametro del circulo es: " + diametroCirculo + " cm");

//PI
const PI = Math.PI;
console.log("El valor de PI es: " + PI);

//Calculo la Circunferencia
const circunferenciaCirculo = diametroCirculo*PI;
console.log("La circunferencia del circulo es: " + circunferenciaCirculo + " cm");

//Calculo el Area
const areaCirculo = (radioCirculo*radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + " cm^2");

console.groupEnd();