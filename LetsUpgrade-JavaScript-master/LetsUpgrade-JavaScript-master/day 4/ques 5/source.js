let sales = prompt("enter the sales amount");
if(sales>=0 && sales<=5000)
{
  let a =(5000*0.02)
  console.log("the solution is"+a);
}
else if (sales>=5000 && sales<=10000)
{
    let b =(5000*0.02)+((sales-5000)*0.05);
    console.log("the solution is"+b);

}
else if (sales>=10000 && sales<=20000)
{
    let c =(5000*0.02)+(5000*0.05)+((sales-10000)*0.07);
    console.log("the solution is"+c);

}
else{
    let d =(5000*0.02)+(5000*0.05)+(10000*0.07)((sales-20000)*0.01);
    console.log("the solution is"+d);
}
