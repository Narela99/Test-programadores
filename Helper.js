 class Helper{
    multiplicate(num1, num2){
        var arrayNum = Array(num1).fill(num2);
        let total = arrayNum.reduce((a, b) => a + b)
        console.log(total)
        return total
    }
    mayorNum(array){
        var mayor = 0;
        for (var i = 0; i < array.length; i++){
            if(array[i] > mayor){
                mayor = array[i]
            }
        }
        console.log(mayor)
        return mayor;

    }
    dejarString(array){
        var newArray = [];
        for(var i = 0; i < array.length; i++){
            if(typeof(array[i]) === 'string' || typeof(array[i]) === 'number' && array[i] != 0){
                newArray.push(array[i])
            }
        }
        console.log(newArray)
        return newArray;
    }
}

var newHelper = new Helper()
newHelper.multiplicate(4, 5)
newHelper.mayorNum([16, 3, 5, 8, 15])
newHelper.dejarString([undefined, null, 5, 'perro', 6, 'gato', null, 'conejo', false, 0 , 3, 4, 'undefined'])