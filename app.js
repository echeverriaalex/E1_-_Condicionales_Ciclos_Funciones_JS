// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
parImpar = (number)=>{
    if(number % 2 == 0)
        console.log("El numero es par");
    else
        console.log("El numero es impar");
}

parImpar(10)
parImpar(23)

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
mayorMenor = (num1, num2)=>{
    if(num1 == num2)
        console.log(`Num1 = ${num1} es igual que Num2 = ${num2}`);
    if(num1 > num2)
        console.log(`Num1 = ${num1} es mayor que Num2 = ${num2}`);
    else
        console.log(`Num1 = ${num1} es menor que Num2 = ${num2}`);
}

mayorMenor(5, 7)
mayorMenor(6, 4)
mayorMenor(10, 10)


//3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
multiplo = (num)=>{
    if(num % 5 == 0)
        console.log(`${num} Es multiplo de 5`);
    else
        console.log(`${num} NO es multiplo de 5`);
}

multiplo(50)
multiplo(56)
multiplo(25)
multiplo(13)

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
imprimirHasta = (num)=>{
    console.log(`\nVoy a imprimir numeros desde el 0 al ${num}`);
    for (let i = 0; i < num; i++) {
        console.log(`\n numero => ${num}`);
    }
}

imprimirHasta(10)
imprimirHasta(8)


// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
imprimirWord = (word, num)=>{
    console.log(`\nVoy a imprimir la palabra "${word}" ${num} veces`);
    for (let i = 0; i < num; i++) {
        console.log(`\nPalabra => ${word}`);
    }
}

imprimirWord("Nucba", 4)
imprimirWord("Javascript", 10)

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
imprimirArray1 = (array)=>{
    console.log(`\nForma 1 de imprimir los valores del array`);
    for (let i = 0; i < array.length; i++) {
        console.log(`\nDatos --> ${array[i]}`);
    }
}

imprimirArray2 = (array)=>{
    console.log(`\nForma 2 de imprimir los valores del array`);
    console.log(`\n${array}`);
}

let array = [1, true, 2, "HTML", 3, "Javascript", 4, false]
imprimirArray1(array)
imprimirArray2(array)


// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
imprimirArrayOther = (array)=>{
    console.log(`\nImprimo los valores del array, pero no el valor la 5ta posición`);
    console.log(`\nEl valor de esa posicion es ${array[4]}`);
    
    for (let i = 0; i < array.length; i++) {
        if(i == 4){
            continue
        }
        else{
            console.log(`\nDatos --> ${array[i]}`);
        }
    }
}

array = [1, 34, 2, 67, 3, 78, 4, 98, 100, 10]
imprimirArrayOther(array)


// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
imprimirArrayMulti = (array, num)=>{
    console.log(`\nImprimo los valores del array, pero multiplicados por ${num}`);
    console.log(`\nArray --> ${array}`);
    for (let i = 0; i < array.length; i++) {
        console.log(`\nResultado --> ${array[i] * num}`);
    }
}

array = [1, 34, 2, 67, 3, 78, 4, 98, 100, 10]
imprimirArrayMulti(array, 5)