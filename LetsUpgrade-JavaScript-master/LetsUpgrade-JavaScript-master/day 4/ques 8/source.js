

let ask = (question,yes,no)=>
{
    if(confirm(question))yes()
    else no();
}
ask(
    "do you agree?",
    yes => {alert("you agreed.");},
    no => {alert("you cancelled the execution.");}
);


