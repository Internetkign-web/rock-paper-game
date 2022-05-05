
let val = 0;


function changeval(){
    input = 1;

    return input;


}
function changeval2(){
    input = 2;

    return input;


}

function changeval3(){
    input = 3;

    return input;


}



//let input = prompt("Input 1 for Paper , 2 for Stone and 3 for Sissors");

let input;















let num =0;






function computerplay(min , max)
{
    let string ; 
    

    val =  Math.floor(Math.random()*(max -min ))+min;

    //need to change to switch for performance...

    if(val==1)
 {
   
     num =1;
     document.getElementById("output").innerHTML = num;

     string = "Paper";

     document.getElementById("output").innerHTML = string;



    //console.log("Paper");
    
 }
else if (val == 2)
 {
  
    num = 2;
    document.getElementById("output").innerHTML = num;
    console.log("Stone");
    string = "stone"
    document.getElementById("output").innerHTML = string;

    
 }
else if(val == 3)
{
    num =3;

    document.getElementById("output").innerHTML = num;
    
    console.log("Sissors"); 

    string = "sissors";
    document.getElementById("output").innerHTML = string;

}

return val , num , string;





}



function game1(computerselection , playselection)
{
    


    if(playselection == computerselection)
    {
        console.log("Both are Equal");

        let resulttext = "Both are Equal";

        document.getElementById("result").innerHTML = resulttext;





        
        

        


    }
    else if(playselection == 1 && computerselection == 2  )
    {
        console.log("You Won , Paper beats Rock");

        



    }

    else if (playselection == 1 && computerselection == 3)
    {
        console.log("You Lost , Sissors beat Paper");

    }

    else if (playselection == 2 && computerselection == 1)
    {
        console.log("You Lost , Paper Beats Stone");
    }

    else if (playselection == 2 && computerselection ==3)
    {
        console.log("You Won!! , Stone Beats Sissors");
    }
    else if(playselection == 3 && computerselection == 1)
    {
        console.log("You Won , Paper Loses to Sissors");

        
    }
    else if (playselection == 3 && computerselection == 2)
    {
        console.log("You Lost , Sissors lose to Stone");
    }



    




}

computerplay(1,4);  

game1(input , num);

