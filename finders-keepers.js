
function findElement(arr, func) {
  var num = 0;

  num = arr.filter(func)[0];
  console.log(num);

}




findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
findElement([1, 3, 5, 9], function(num){ return num % 2 === 0; });
