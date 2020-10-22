while(true){
let num = prompt("enter the number");
    if(num>100){
        console.log(num);
        break;
    }
    else {
        console.log("the number is greater than 100")
        continue;
    }
}