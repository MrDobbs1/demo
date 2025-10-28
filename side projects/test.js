  var matrix = [];


for (var i = 0; i < 2; i++) {

    var arr = [];

    for (var j = 0; j < 3; j++) {
        var numbers = [];
          
        var start = i * 6 + j * 2 + 1
        for (var k = start; k < start + 2; k++) {
            numbers.push(k);
        }
        arr.push(numbers);

    }
    matrix.push(arr);

}





 var x = 6;
 var y = "6.7";
  
  console.log(x, parseInt(y));

