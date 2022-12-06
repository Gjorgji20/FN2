let userAge=prompt("Insert your age");

userAge=parseInt(userAge);
let message="";

if(!isNaN(userAge))
{ 
    if(userAge>=21)
    {
        message="Confirm entry to a venue and the ability to purchase alcogol";

    }else if(userAge>=19)
    {
        message="Confirm entry to a venue but deny the purchase of alcohol";

    }else
    {
        message="Deny entry if none are true"
    } 
    alert(message);
}
else
{
    alert("Not a number")
}

