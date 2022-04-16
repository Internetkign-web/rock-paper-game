
let val = 0;


let input = prompt("Input 1 for Paper , 2 for Stone and 3 for Sissors");



let num =0;

function computerplay(min , max)
{
    

    val =  Math.floor(Math.random()*(max -min ))+min;

    //need to change to switch for performance...

    if(val==1)
 {
     num =1;

    console.log("Paper");
    
 }
else if (val == 2)
 {
    num = 2;
    console.log("Stone");
    
    
 }
else if(val == 3)
{
    num =3;
    
    console.log("Sissors"); 
}

return val , num;










    

    
    

    
 
    

}

function game1(playerselection , computerselection)
{
    


    if(playerselection == computerselection)
    {
        console.log("Both are Equal");
        console.log("Veryyy Coooollll!!!!!");
        

        


    }
    else if(playerselection == 1 && computerselection == 2  )
    {
        console.log("You Won , Paper beats Rock");

        



    }

    else if (playerselection == 1 && computerselection == 3)
    {
        console.log("You Lost , Sissors beat Paper");

    }

    else if (playerselection == 2 && computerselection == 1)
    {
        console.log("You Lost , Paper Beats Stone");
    }

    else if (playerselection == 2 && computerselection ==3)
    {
        console.log("You Won!! , Stone Beats Sissors");
    }
    else if(playerselection == 3 && computerselection == 1)
    {
        console.log("You Won , Paper Loses to Sissors");

        
    }
    else if (playerselection == 3 && computerselection == 2)
    {
        console.log("You Lost , Sissors lose to Stone");
    }



    




}











computerplay(1,4);  

game1( input,num );
