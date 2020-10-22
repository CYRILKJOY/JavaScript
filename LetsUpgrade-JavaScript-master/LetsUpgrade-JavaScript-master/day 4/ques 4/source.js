let firstNumber = prompt("enter the first number");
let secondNumber = prompt("enter the second number");
let operation = prompt("enter the option + - / * ");
let a = parseInt(firstNumber);
let b = parseInt(secondNumber);
switch(operation)    
    {
        case '+':
            result=a+b;
            break;
             
        case '-':
            result=a-b;
            break;
         
        case '*':
            result=a*b;
            break;
             
        case '/':
            result=a/b;
            break;
        case '%':
            result=((a+b)/100);
            break;
        default:
            console.log("Invalid operation.\n");
	}
	console.log(result);
