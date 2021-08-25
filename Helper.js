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
        for(var i = 0; i < array.length; i++){
            if(!Array.isArray(array[i])){
                this.initArray.push(array[i])
            }
            else this.desanidarArray(array[i])
        }

        return this.initArray 
    }
    truncateStr(str){ // saca punto y comas de un string, convierte todo a minuscula, y saca tildes.
        var minuscula = str.toLowerCase()
        var string = minuscula.replace(/,/g, "");
        var newStr = string.replace(/\./g, '');
        var newString = newStr.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

        return newString;
    }
    masRepetido(string){ //Dado un string, devolver un objeto/array que indique la palabra que mas veces se repite, y su cantidad.
        var newString = this.truncateStr(string)
        var array = newString.split(" ");
        var obj = {}
        array.forEach(function(s){  // pone en el objeto la key: es cada palabra, y valor: es el numero de repeticion
            obj[s] = (obj[s] || 0) + 1;
          });
        
        var masRepeticiones = Math.max(...(Object.values(obj)))  // obtiene el valor mas alto
        var stringRepetido = Object.keys(obj).find(key => obj[key] === masRepeticiones)  //obtiene la key del valor mas alto
        var newObj = {}
        newObj[stringRepetido] = masRepeticiones; // armo el nuevo objeto con el string y el numero de repeticiones que tiene que retornar
        
        return newObj
    }
    palindromo(string){ //Verificar si un string es un palíndromo.
        var str = this.truncateStr(string);
        var newStr = str.replace(/ /g, "")
        if(string.length === 1 || string.length === 0){
            console.log('Si es un palindromo')
            return 'Si es un palindromo'
        }
        else if(newStr[0] === newStr[newStr.length-1]){
            var primer = newStr.slice(1)
            var ultimo = primer.slice(0, -1)
            return this.palindromo(ultimo)
            
        }
        else
        console.log('No es un palindromo')
        return 'No es un palidromo'
        
    }
    numMax(num1 = 0, num2 = 0, num3 = 0,...numN){ //Dado 3 numeros, devolver el mayor. Hacer una function, adaptada de la anterior, para que funcione con cualquier cantidad de numeros.
        var maxNum = Math.max(num1, num2, num3,...numN)
        return maxNum
    }
}


var newHelper = new Helper();

//EJEMPLOS DE CADA METODO:

//console.log(newHelper.multiplicate(6, 5))
//console.log(newHelper.mayorNum([16, 3, 19, 8, 15]))
//console.log(newHelper.dejarString([undefined, null, 5, 'perro', 6, 'gato', null, 'conejo', false, 0 , 3, 4, 'undefined']))
//console.log(newHelper.desanidarArray([1, [2, [3, 4]], 'hola', [1, 'buenos dias']]))
//console.log(newHelper.masRepetido('Este es un string, el cual es un string, donde se repite muchas veces la palabra string es.'))
//newHelper.truncateStr('Este es un string, el cual es un string, donde se repite muchas veces la palabra es')
//newHelper.palindromo('Somos, o no somos.')
//console.log(newHelper.numMax(2, 5, 10, 7, 15, 12, 20, 9))