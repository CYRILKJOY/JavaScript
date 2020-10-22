let num = prompt("enter the number");
    for(i=1; i<=num; i++)
    {
        fact=0;
        for(j=1; j<=num; j++)
        {
            if(i%j==0)
                fact++;
        }
        if(fact==2)
           console.log(i);
    }