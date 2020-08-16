//Return the sum
function sum(num1, num2) {
  return num1 + num2;
}
var result = sum(6,8);
console.log(result);

//Three numbers returns largest
var numbers = [8,10,12,13,24];
var largestNumber = (values) => {
  var highest = 0;
  for(var i=0; i<values.length; i+=1){
    if(values[i] > highest){
      highest = values[i];
    }
  }
  return highest;
};

console.log(largestNumber(numbers));

//Returns Even or Odd
function isEven(number) {
  return number % 2 === 0;
}
var result1 = isEven(8);
console.log(result1);

//
var stringOne = "My name is Mikkel";
var stringTwo = "Lamb and I'm 31 years old";
var result2 = stringOne <= stringTwo;
console.log(result);
