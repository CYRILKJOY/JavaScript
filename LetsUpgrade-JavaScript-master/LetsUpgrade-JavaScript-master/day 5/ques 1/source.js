/**************************  2    ********************** */


let inputArray = [];
 size = 5; //Maximum Array size

for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt('Enter Element ' + (i+1));
}

//Print the array in the console.
console.log(inputArray);





/**************************  1    ********************** */


let number = prompt("enter a number");
if(number%2==0)
{
  console.log('positive');
}



/**************************  4      *** */

let cube = inputArray.map((el)=>el**3);
console.log(cube);




/*****************************2******************** */

let even = inputArray.filter(el=>el%2!=0);
console.log(even);






