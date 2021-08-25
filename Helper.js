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
}

var newHelper = new Helper()
newHelper.multiplicate(4, 5)
newHelper.mayorNum([16, 3, 5, 8, 15])