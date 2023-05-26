//Primer ejercicio//

let variableSinValor; 

//Segunda ejercicio//

let booleano1 = true;

let booleano2 = false;

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
let incremetarAntes= 2;
let resultadoAntes= ++incremetarAntes

//Diez//

let contarHasta10_2= 0;


for ( i = 0; i <= 10; i++) {
    const contarHasta10_2 = i;
}

//Once//

for (let i = 0; i <= 10; i++) {
    let postI = i;
    let postJ = i;
    postJ++
    let sumaIJ = postJ + postI
    //console.log (sumaIJ)
}

//Doce//

let sumaPares= 0;

for (let i = 0; i <= 10; i++) {
    sumaPares= i %2
    if (sumaPares == 0 ) {
        sumaPares= i + i
        console.log (sumaPares)
    }
} 