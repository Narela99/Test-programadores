 class Helper{
    constructor(){
        this.initArray = [];
    }
    multiplicate(num1, num2){ // Multiplicar 2 numeros, sin utilizar el operador de multiplicacion.
        var arrayNum = Array(num1).fill(num2);
        let total = arrayNum.reduce((a, b) => a + b)
        
        return total
    }
    mayorNum(array){ // Obtener el numero mayor dentro de un arreglo. Solo iterar 1 vez.
        var mayor = 0;
        for (var i = 0; i < array.length; i++){
            if(array[i] > mayor){
                mayor = array[i]
            }
        }
        
        return mayor;

    }
    dejarString(array){ // Dado un arreglo, eliminar todos los "undefined", "null", "false" y 0 (no sus valores en string). Iterar solo 1 vez.
        var newArray = [];
        for(var i = 0; i < array.length; i++){
            if(typeof(array[i]) === 'string' || typeof(array[i]) === 'number' && array[i] != 0){
                newArray.push(array[i])
            }
        }
        
        return newArray;
    }
    desanidarArray(array){ //Dado un arreglo multidimensional, obtener todos los valores en un nuevo arreglo de una sola dimension. Usar recursividad
        var newArray = [];
        for(var i = 0; i < array.length; i++){
            if(!Array.isArray(array[i])){
                this.initArray.push(array[i])
            }
            else this.desanidarArray(array[i])
        }
        
        return this.initArray
        
    }
}



var newHelper = new Helper()
console.log(newHelper.multiplicate(4, 5))
console.log(newHelper.mayorNum([16, 3, 5, 8, 15]))
console.log(newHelper.dejarString([undefined, null, 5, 'perro', 6, 'gato', null, 'conejo', false, 0 , 3, 4, 'undefined']))
console.log(newHelper.desanidarArray([1, [2, [3, 4]], 'hola', [1, 'buenos dias']]))