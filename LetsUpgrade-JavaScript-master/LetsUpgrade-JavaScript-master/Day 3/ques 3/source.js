let marks = Number(prompt("Enter marks",0));

if(marks>100)
   {
    /* Marks greater than 100 */
    console.log("Enter your Marks Between Limit");
   }
   else
   {
   switch(marks/10)
   {
       case 10 :
       case 9 :
        console.log("\nYour Grade Is: A or Excellent");
           break;
       case 8 :
       case 7 :
           console.log("\nYour Grade Is: B or Very Good" );
           break;
       case 6 :
        console.log("\nYour Grade Is: C or Fair" );
           break;
       case 5 :
       case 4 :
        console.log("\nYour Grade Is: D or Pass");
           break;
       default :
       console.log("\nYou Grade Is: F or Fail\n");
   }
}