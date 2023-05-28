//Primer ejercicio//

let variableSinValor; 

//Segunda ejercicio//

let booleano1 = true;

let booleano2 = true;

//Tercer ejercicio//

const PI = 3.14;

//Cuatro//

const TAU = PI * 2;

//Cinco//

let booleanoAnd;

if (booleano1 == booleano2){
    booleanoAnd= true;
}
    else {
        booleanoAnd= false
    }

//Seis//

let booleanoNot;

if (booleano1 != true) {
    booleanoNot= true
} else {
    booleanoNot= false
}

//Siete//

let booleanoMix0;

if ((booleano1 || booleano2 ) && (booleano1 || (!booleano1 && !booleano2))) {
    booleanoMix0= true
} else {
    booleanoMix0= false
}

//Ocho//

let incrementarDesp= 2;
let resultadoDesp= incrementarDesp++

//Nueve//
let incrementarAntes= 2;
let resultadoAntes= ++incrementarAntes

//Diez//

let contarHasta10_2= 0;


for ( i = 0; i <= 10; i++) {
    contarHasta10_2 = i;
}

//Once//
let postI = 0;
let postJ = 0;

for (let i = 0; i <= 11; i++) {
    postJ= i;
    postI += postJ++;  
    console.log (postI)
}

//Doce//

let sumaPares= 0;

for (let i = 0; i <= 10; i++) {
    sumaPares= i %2
    if (sumaPares == 0 ) {
        sumaPares += i;
        console.log (sumaPares)
    }
} 

//Trece//
let variableValorNumerico = 1;

//Catorce//
const MiNombre= "Manuel"; 

//Quince//
const MiNumeroFav= 14;

//Dieciseis//
let booleanoOr;

if (booleano1 == booleano2){
    booleanoOr= true;
}
    else {
    booleanoOr= false
    }

//Diecisiete//
let booleanoMix1;

if (booleano1 && ((TAU/2 == PI) || (variableValorNumerico >= MiNumeroFav))){
    booleanoMix1= true;
}
    else {
        booleanoMix1= false
    }

//DIECIOCHO//
let seisNoEsNueve= 6 !==9;
console.log(seisNoEsNueve)

//DIECINUEVE//
let booleanoMix2;

if (variableValorNumerico >0 || variableValorNumerico < (MiNumeroFav * TAU)) {
    console.log (booleanoMix2)
}

//VEINTE//

let valorSuma = (MiNumeroFav + variableValorNumerico);

//VEINTIUNO//

let valorResta = (MiNumeroFav - variableValorNumerico)

//VEINTIDOS//

let valorMultiplicacion = (MiNumeroFav * variableValorNumerico)

//VEINTITRES//

let valorDivision= MiNumeroFav/3

//VEINTICUATRO//

let contarHasta10= 0;
while (contarHasta10 <= 10) {
    console.log (contarHasta10)
    contarHasta10++
}

//VEINTICINCO//
let preI= 0;
let preJ= 0;

for (let i = 0; i <= 11; i++) {
    preJ = i;
    preI = i + preJ++
    //console.log(preI)
}

//VEINTISEIS//
let sumaImpares= 0;

for (let i = 0; i < 10; i++) {
    sumaImpares= i %2
    if (sumaImpares !== 0 ) {
        sumaImpares= i + i
        console.log (sumaImpares)
    }
} 